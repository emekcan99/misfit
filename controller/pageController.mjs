import { User } from "../models/User.mjs";

export const getIndexPage = async (req, res) => {
  res.status(200).render("index", {
    page_name: "home",
  });
};

export const getAboutPage = async (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

export const getServicePage = async (req, res) => {
  res.status(200).render("service", {
    page_name: "service",
  });
};

export const getNewsPage = async (req, res) => {
  res.status(200).render("news", {
    page_name: "news",
  });
};

export const getProgramPage = async (req, res) => {
  const user = await User.findById(req.session.userID)
  console.log(user)
  
  res.status(200).render("program", {
    page_name: "program",
    user:user,
  });
};
export const getGalleryPage = async (req, res) => {
  res.status(200).render("gallery", {
    page_name: "gallery",
  });
};
export const getContactPage = async (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};
export const getLoginPage = async (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};

export const getSignUpPage = async (req, res) => {
  res.status(200).render("signup",{
    page_name: "login"
  });
};

export const getAddProgramPage = async (req,res) => {
  const user = await User.findById(req.session.userID)
  res.status(200).render("add-program",{
    page_name:"program",
    user: user
  })
}
