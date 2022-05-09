const mongoose = require("mongoose");

//creating the user blueprint
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    youtubeLink: {
        type: String,
    },
    tags: {
        type: String,
    },
    instructions: {
        type: String,
    },
    imageThumbnail: {

        type: Buffer
    }
})

//creating a modal from the blueprint (schema)
module.exports = mongoose.model("User", userSchema)