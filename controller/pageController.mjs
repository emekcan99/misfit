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

export const getTrainerPage = async (req, res) => {
  res.status(200).render("trainer", {
    page_name: "trainer",
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
