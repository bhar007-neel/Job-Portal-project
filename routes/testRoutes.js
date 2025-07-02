import express from "express";
import {testPostController} from "../controller/testController.js";
// router object
const router = express.Router();
// routes
router.post("/test", testPostController);

export default router;
