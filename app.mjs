import express from "express";
import { pageRouter } from "./routes/pageRoute.mjs";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoute.mjs";
import session from "express-session";
import flash from "connect-flash";
import MongoStore from "connect-mongo";

const app = express();
const port = 3000;

// view engine
app.set("view engine", "ejs");

// global variable
global.userIn = null;

// db connection
mongoose
  .connect("mongodb://localhost:27017/misfit")
  .then(() => console.log("db connection is successful"));

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "my_keyboard_cat",
    resave:false,
    saveUninitialized: true,
    store:  MongoStore.create({mongoUrl:"mongodb://localhost:27017/misfit"})
  })
)
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});

// routes
app.use("*",(req,res,next) =>{
  userIn = req.session.userID;
  next();
})
app.use("/", pageRouter);
app.use("/users", userRouter);

app.listen(3000, () => console.log(`server is up on port ${port}`));
