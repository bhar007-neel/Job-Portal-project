import mongoose from "mongoose";
import validator from "validator";

// scheme

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    lastName: {
      type: String,
    },

    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "password is Required"],
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
