import express from "express"
import { registerController } from "../controller/authController.js"

// router Object
const router = express.Router()

// routes
router.post('/register',registerController)

//\export
export default router