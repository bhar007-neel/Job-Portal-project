import express from "express"
import {createJobController} from '../controller/jobsController.js'
import userAuth from "../middelwares/authmiddleware.js"
const router = express.Router()
// routes
//create job|| Post
router.post("/create-job",userAuth,createJobController);

router.get('get-jobs',userAuth,)
export default router