import express from "express"
import { createProduct, deleteProduct } from "../controllers/productControllers.js"

const router = express.Router()

// create product
router.post("/", createProduct)
router.delete("/:id", deleteProduct)
// implement get all products


export default router