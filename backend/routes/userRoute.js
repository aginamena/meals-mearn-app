const express = require("express");
const User = require("../modals/UserInfo")

const userRouter = express.Router();

//user is trying to login
userRouter.get("/verifylogin", async (req, res) => {
    res.json("connected")
})
//user is trying to signin
//register new users
userRouter.post("/createUser", async (req, res) => {
    User.create(req.body)
        .then(() => res.json("new user created"))
        .catch(() => res.json("error required"))
})

module.exports = userRouter;