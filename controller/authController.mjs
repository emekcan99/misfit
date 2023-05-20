import { User } from "../models/User.mjs";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).redirect("/login");
  } catch (error) {
    const errors = validationResult(req);
    console.log(errors);
    console.log(errors.array()[0].msg);

    for (let i = 0; i < errors.array().length; i++) {
      req.flash("error", `${errors.array()[i].msg}`);
    }
    res.status(400).redirect("/signUp");

    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          req.session.userID = user._id;
          res.status(200).redirect("/service");
        } else {
          req.flash("error", "your password is not correct");
          res.status(400).redirect("/login");
        }
      });
    } else {
      req.flash("error", "user is not exist!");
      res.status(400).redirect("/login");
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const logOutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
