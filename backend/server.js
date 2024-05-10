import express, { response } from "express"; // custome: esmodule
import { connectDB } from "./db/config.js";
import User from "./models/userModel.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
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

// add port into the .env file and access it here
app.listen(PORT, () => console.log(`Server listening on port : ${PORT} `));
