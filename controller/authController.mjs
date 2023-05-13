import { User } from "../models/User.mjs";
import { validationResult } from "express-validator";

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
  
 console.log(error)
  }
};
