import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/productControllers.js";

const router = express.Router();

// create product
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
// implement get all products
router.get("/", getAllProducts);

export default router;
