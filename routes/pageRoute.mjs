import express from "express";
import {
  getAboutPage,
  getContactPage,
  getProgramPage,
  getGalleryPage,
  getIndexPage,
  getLoginPage,
  getNewsPage,
  getServicePage,
  getSignUpPage,
  getAddProgramPage,
} from "../controller/pageController.mjs";

export const pageRouter = express.Router();

pageRouter.route("/").get(getIndexPage);
pageRouter.route("/about").get(getAboutPage);
pageRouter.route("/service").get(getServicePage);
pageRouter.route("/news").get(getNewsPage);
pageRouter.route("/program").get(getProgramPage);
pageRouter.route("/gallery").get(getGalleryPage);
pageRouter.route("/contact").get(getContactPage);
pageRouter.route("/login").get(getLoginPage);
pageRouter.route("/signup").get(getSignUpPage);
pageRouter.route("/add-program").get(getAddProgramPage);
