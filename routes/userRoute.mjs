import { body } from "express-validator";
import { User } from "../models/User.mjs";
import { createUser, logOutUser, loginUser } from "../controller/authController.mjs";
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.mjs";

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
userRouter.route("/login").post(loginUser)
userRouter.route("/logout").get(logOutUser)