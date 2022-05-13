const express = require("express");
const User = require("../modals/UserInfo")
const jwt = require("jsonwebtoken")

const userRouter = express.Router();

//register new users
userRouter.post("/createUser", async (req, res) => {
    const newlyCreatedUser = await User.create(req.body);
    res.json(newlyCreatedUser);
})

//checking if the email address is already in the database
userRouter.get("/verifyEmail/:email", async (req, res) => {
    const user = await User.findOne({ emailAddress: req.params.email })
    res.json(user)
})

//add the meal id to the users favourite array
userRouter.put("/addToFavourite/:userId/:mealId", async (req, res) => {
    const { userId, mealId } = req.params;
    const user = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { favourites: mealId } },
        { new: true }
    )
    res.json(user);
})

//delete meal from favourites
userRouter.delete("/:userId/:mealId", async (req, res) => {
    const { userId, mealId } = req.params;
    const user = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { favourites: mealId } },
        { new: true }
    )
    res.json(user.favourites);
})

module.exports = userRouter;