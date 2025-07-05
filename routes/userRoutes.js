import express from "express"
import userAuth from "../middelwares/authmiddleware.js"
import {updateUserController} from '../controller/userController.js'

// router object
const router = express.Router();

// routes
// Get Users || Get

// updates user || get
router.put('/update-user',userAuth,updateUserController)

export default router;