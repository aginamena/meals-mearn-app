const express = require("express");
const User = require("../modals/UserInfo")

const userRouter = express.Router();

//register new users
userRouter.post("/createUser", async (req, res) => {
    User.create(req.body)
        .then(() => res.json("new user created"))
        .catch(() => res.json("error required"))
})

//checking if the email address is already in the database
userRouter.get("/verifyEmail/:email", async (req, res) => {
    const user = await User.findOne({ emailAddress: req.params.email })
    res.json(user)
})

module.exports = userRouter;