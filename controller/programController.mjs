import { Program } from "../models/Program.mjs";

export const createProgram = async (req, res) => {
  try {
    const program = await Program.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      user: req.session.userID,
    });

    req.flash("success", `${program.name} has been created succesfully`);
    res.status(201).redirect("/courses");
  } catch (error) {
    req.flash("error", "someting happend!");
    res.status(400).redirect("/courses");
  }
};
