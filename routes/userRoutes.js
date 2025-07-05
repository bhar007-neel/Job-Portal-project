import express from "express"
import userAuth from "../middelwares/authmiddleware"

// router object
const router = express.Router

// routes
// Get Users || Get

// updates user || get
router.put('/update-user',userAuth,upda)
