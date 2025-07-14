import express from "express"
import { createJobController, getAllJobsController, updateJobController,deleteJobController, jobStatsController } from "../controller/jobsController.js";

import userAuth from "../middelwares/authmiddleware.js"
const router = express.Router()
// routes
//create job|| Post
router.post("/create-job",userAuth,createJobController);

router.get('/get-jobs',userAuth,getAllJobsController)


//UPdate jobs || put || patch
router.patch("/update-job/:id",userAuth, updateJobController)

//DELETE JOBS || DELETE

router.delete("/delete-job/:id",userAuth,deleteJobController)

//JOBS Stats filter || get jabs
router.get("/job-stats",userAuth,jobStatsController)






export default router
