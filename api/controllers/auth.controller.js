import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  //console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully");
  } catch (error) {
    //console.log(error);
    //res.status(500).json(error.message);
    // we can use the middleware we have defined.
    next(error);
    //Or we can use the middleware and the errorHandler function
    //next(errorHandler(550, 'Error from the function'));
  }
};
//this model will authenticate our user.

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, " Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    //prevent the password from replying to the user.
    const {password: pass, ...rest } = validUser._doc;
    //this cookie will be for a 1000 days
    //res.cookie('access_token', token, {httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60)});
    // this below cookie will be for only a session.
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
      //.json(validUser);
  } catch (error) {
    next(error);
  }
};
