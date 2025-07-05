import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
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

    const user = await userModel.create({ name, email, password });
    //token
    const token = user.createJWT();

    res.status(201).send({
      success: true,
      message: "created successfully",
      user: {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        location: user.location,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next("Please provide all fields");
    }
    // find user by email
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return next("Invalid username or password");
    }

    // compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return next("Invalid username or password");
    }
    user.password =undefined;

    const token = user.createJWT();
    res.status(200).json({
      success: true,
      message: "Login successfully",
      user: {
        name: user.name,
        email: user.email,
        location: user.location,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};
