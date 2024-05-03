import express, { response } from "express"; // custome: esmodule
import { connectDB } from "./db/config.js";
import User from "./models/userModel.js";
import bodyParser from "body-parser";

connectDB();

const PORT = 5000;
// initilize the express app

const app = express();
app.use(bodyParser.json());
// GET : http://localhost:5000/api/users

// Get All Usrs
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

// Create  All Users
app.post("/api/users", async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  const user = {
    username,
    email,
    password,
    isAdmin,
  };

  try {
    await User.create(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server listening on port : ${PORT} `));
