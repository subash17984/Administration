const express=require("express");
const app = express.Router();
const userControllers=require("./app/router/userRouter");
const feedControllers=require("./app/router/feedRouter");
const authController=require("./app/router/authRouter");
app.use("/User",userControllers);
app.use("/Feed",feedControllers);
app.use("/auth",authController);

module.exports=app;