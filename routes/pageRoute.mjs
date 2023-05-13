import express from "express";
import {
  getAboutPage,
  getContactPage,
  getGalleryPage,
  getIndexPage,
  getLoginPage,
  getNewsPage,
  getServicePage,
  getTrainerPage,
} from "../controller/pageController.mjs";

export const pageRouter = express.Router();

pageRouter.route("/").get(getIndexPage);
pageRouter.route("/about").get(getAboutPage);
pageRouter.route("/service").get(getServicePage);
pageRouter.route("/news").get(getNewsPage);
pageRouter.route("/trainer").get(getTrainerPage);
pageRouter.route("/gallery").get(getGalleryPage);
pageRouter.route("/contact").get(getContactPage);
pageRouter.route("/login").get(getLoginPage);


