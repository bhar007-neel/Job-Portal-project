import userModel from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
  try {
    const { name, email, lastname, password, location } = req.body;

    if (!name || !email || !lastname || !password || !location) {
      return res.status(400).json({ message: "Please provide complete details" });
    }

    const user = await userModel.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.password = password; // will be hashed by pre-save hook
    user.location = location;

    await user.save();

    const token = user.createJWT();

    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};