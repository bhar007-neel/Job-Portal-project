import jobsModel from "../models/jobsModel.js";
//=============  CREATE JOBS ======================
export const createJobController = async (req, res, next) => {
  const { company, position } = req.body;
  if (!company || !position) {
    next("Please Provide All Fields");
  }
  req.body.createdBy = req.user.userId;
  const job = await jobsModel.create(req.body);
  res.status(201).json({ job });
};



// =================== GET JOBS ========================================
export const getAllJobsController = async (req, res, next) => {
  const jobs = await jobsModel.find({ createdBy: req.user.userId });
  res.status(200).json({
    totalJobs: jobs.length,
    jobs,
  });
};


// ======================= UpDATE JOBS ===========================================

export const updateJobController = async (req,res,next)=>{
const {id} =req.params
const {company,position}= req.body
//validation
if(!company || !position){
    next('please provide all fields')
}
//find job
const job = await jobsModel.findOne({_id:id})
}