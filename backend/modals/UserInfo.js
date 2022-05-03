const mongoose = require("mongoose");

//creating the user blueprint
const userSchema = new mongoose.Schema({
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//creating a modal from the blueprint (schema)
module.exports = mongoose.model("User", userSchema)
