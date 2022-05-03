// we use mongoose library to connect to mongodb
const mongoose = require("mongoose");

//url for remote mongo db
const url = "mongodb+srv://admin-mena:70DuKPizRZUveGvO@cluster0.bpbrz.mongodb.net/test"

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("connected to database"))
    .catch(error => console.log(error))