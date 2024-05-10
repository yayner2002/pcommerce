import express from "express"
import { getAllUsers, registerUser } from "../controllers/userControllers.js"

const router = express.Router()
// get all users
router.get("/", getAllUsers)
// define register a user 
// route /api/users
 router.post("/", registerUser)
// implement get user by id


export default router