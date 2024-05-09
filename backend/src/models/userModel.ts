import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
    email: string;
    password: string;
}

const userSchema: Schema<User> = new Schema<User>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model<User>("User", userSchema);
