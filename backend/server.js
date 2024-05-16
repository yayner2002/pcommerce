import express, { response } from "express"; // custome: esmodule
import { connectDB } from "./db/config.js";
import User from "./models/userModel.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path"
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

connectDB();

const PORT = process.env.PORT;
// initilize the express app

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const __dirname = path.resolve(); // set the __dirname variable to the current directory name

if (process.env.NODE_ENV === "production") {
  // set static folder

  app.use(express.static(path.join(__dirname, "frontend/dist")));

  // any routes that are not matched above will be redirected to the index.html file

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// add port into the .env file and access it here
app.listen(PORT, () => console.log(`Server listening on port : ${PORT} `));
