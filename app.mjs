import express from "express";
import { pageRouter } from "./routes/pageRoute.mjs";

const app = express();
const port = 3000;

// view engine
app.set("view engine", "ejs")

// middlewares
app.use(express.static("public"))


// routes
app.use("/",pageRouter)

app.listen(3000, () => console.log(`server is up on port ${port}`));
