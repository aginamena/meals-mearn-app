const express = require("express");
const User = require("../modals/UserInfo")
const jwt = require("jsonwebtoken")

const userRouter = express.Router();

//register new users
userRouter.post("/createUser", async (req, res) => {
    const newlyCreatedUser = await User.create(req.body);
    console.log(newlyCreatedUser);
    const token = jwt.sign(newlyCreatedUser.toJSON(), "secretKeyForCreatingNewUsers", { expiresIn: "10m" })
    console.log(token);
    res.json(newlyCreatedUser);
    // .then(() =>{
    //     jwt.sign()
    //     res.json("new user created")
    // } )
    // .catch(() => res.json("error required"))
})

//checking if the email address is already in the database
userRouter.get("/verifyEmail/:email", async (req, res) => {
    const user = await User.findOne({ emailAddress: req.params.email })
    if (user) {
        // the user is allowed for 10min before they login again
        const token = jwt.sign(user.toJSON(), "secretKeyForCreatingNewUsers", { expiresIn: "10m" })
        // console.log(token)
        res.cookie("token", token, { httpOnly: true })
    }
    res.json(user)
})

module.exports = userRouter;