import express from "express"
import { getAllUsers } from "../controllers/userControllers.js"

const router = express.Router()

router.get("/", getAllUsers)
// implement get user by id


export default router