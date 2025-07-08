import mongoose from "mongoose";
const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "company name is required"],
    },
    position: {
      type: String,
      required: [true, "job position is required"],
      minlength: 2,
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["pending", "reject", "interview"],
      default: "pending",
    },
    workType: {
      type: String,
      enum: ["Full-time", "part-time", "contract"],
      default: "Full-time",
    },
    workLocation: {
      type: String,
      default: "Ottawa",
      required: [true, "work location is required"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export default mongoose.model("job", jobSchema);
