import express from "express";
import {testPostController} from "../controller/testController.js";
import userAuth from "../middelwares/authmiddleware.js"

// router object
const router = express.Router();
// routes
router.post("/test-post", testPostController);

export default router;
