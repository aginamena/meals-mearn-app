const express = require("express");
//creating an express application
const app = express();

//routing for the home page
app.get("/", (req, res) => res.send("Hello world"))

//running the express app on localhost 9000
app.listen(9000, () => console.log("App is running on part 9000"))
