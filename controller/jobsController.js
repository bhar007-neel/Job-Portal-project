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

export const updateJobController = async (req, res, next) => {
  const { id } = req.params;
  const { company, position } = req.body;
  //validation
  if (!company || !position) {
    return next("please provide all fields");
  }
  //find job
  const job = await jobsModel.findOne({ _id: id });
  //validation
  if (!job) {
    next(`no jobs found with this id ${id}`);
  }
  if (job.createdBy.toString() !== req.user.userId) {
    return next("Not authorized");
  }

  const updateJob = await jobsModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  // response
  res.status(200).json({ updateJob });
};

// =====================  DELETE job =========================================================================

export const deleteJobController = async (req, res, next) => {
  const { id } = req.params;
  // find job
  const job = await jobsModel.findOne({ _id: id });
  //validation
  if (!job) {
    next(`no job found`);
  }
  if(!req.user.userId === job.createdBy.toString()){
    next(`you are not authorzie to delete this job`)
    return;
  }

  await jobsModel.findByIdAndDelete(id);
    res.status(200).json({ message:"succesfully deleted"});
};
