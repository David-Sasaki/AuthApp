import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  listContainer: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
  },
}));

const Dashboard: React.FC = () => {
  const classes = useStyles();

  // Mock data for demonstration
  const users = [
    { id: 1, email: "user1@example.com" },
    { id: 2, email: "user2@example.com" },
    { id: 3, email: "user3@example.com" },
  ];

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Dashboard
      </Typography>
      <List className={classes.listContainer}>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Dashboard;
