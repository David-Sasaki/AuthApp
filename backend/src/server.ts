import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import passportJWT from "passport-jwt";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import User from "./models/userModel";
import authRoutes from "./routes/authRoutes";

const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) =>
    console.error("Could not connect to MongoDB", err)
  );

const { ExtractJwt, Strategy: JwtStrategy } = passportJWT;

const jwtOptions: any = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

const strategy = new JwtStrategy(jwtOptions, async (jwt_payload, next) => {
  try {
    const user = await User.findOne(jwt_payload.id);
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  } catch (error) {
    next(error, false);
  }
});

passport.use(strategy);

app.use(passport.initialize());

app.use("/api/auth", authRoutes);

const port: number = parseInt(process.env.PORT!) || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
