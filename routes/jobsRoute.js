import express from "express"
import {createJobController,getAllJobsController} from '../controller/jobsController.js'
import userAuth from "../middelwares/authmiddleware.js"
const router = express.Router()
// routes
//create job|| Post
router.post("/create-job",userAuth,createJobController);

router.get('/get-jobs',userAuth,getAllJobsController)
export default router

//UPdate jobs || put
router.patch("/update-job/:id",userAuth, updateJobController)