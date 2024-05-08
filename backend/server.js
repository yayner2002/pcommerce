import express, { response } from "express"; // custome: esmodule
import { connectDB } from "./db/config.js";
import User from "./models/userModel.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"

connectDB();

const PORT = 5000;
// initilize the express app

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes)

// change this so you can use the router to Create  All Users
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

// add port into the .env file and access it here
app.listen(PORT, () => console.log(`Server listening on port : ${PORT} `));
