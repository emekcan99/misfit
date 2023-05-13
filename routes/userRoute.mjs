import { body } from "express-validator";
import { User } from "../models/User.mjs";
import { createUser } from "../controller/authController.mjs";
import express from "express";

export const userRouter = express.Router();

userRouter.route("/signUp").post(
  [
    body("name").not().isEmpty().withMessage("please enter your name"),

    body("email")
      .isEmail()
      .withMessage("please enter a valid email")
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          return Promise.reject("email is already exists!");
        });
      }),

    body("password").not().isEmpty().withMessage("please enter a password!"),
  ],
  createUser
);
