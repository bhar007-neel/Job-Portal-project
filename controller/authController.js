import userModel from "../models/userModel.js";

export const registerController = async (req, res,next) => {
  try {
    const { name, email, password } = req.body;
    // validate
    if (!name) {
      return res
        .status(400)
        .send({ success: false, message: "please provide name" });
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "please provide email" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "please provide password" });
    }
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "user already exists because email already in use",
      });
    }

    const user = await userModel.create({name,email,password})
    res.status(201).send({
        success:true,
        message: "created successfully",
        user
    })
  } catch (error) {
    next(error);
  }
};
