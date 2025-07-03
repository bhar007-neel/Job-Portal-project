import express from "express"
import { loginController, registerController } from "../controller/authController.js"

// router Object
const router = express.Router()

// routes || Post
router.post('/register',registerController)

// Login || POST
router.post('/login',loginController)

//export
export default router