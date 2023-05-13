import express from "express";
import { pageRouter } from "./routes/pageRoute.mjs";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoute.mjs";

const app = express();
const port = 3000;

// view engine
app.set("view engine", "ejs");

// db connection
mongoose
  .connect("mongodb://localhost:27017/misfit")
  .then(() => console.log("db connection is successful"));

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", pageRouter);
app.use("/users", userRouter);

app.listen(3000, () => console.log(`server is up on port ${port}`));
