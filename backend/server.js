const express = require("express");
//creating an express application
const app = express();

// we can to be able to take incoming request from the client. 
// we use cors for that
const cors = require("cors");

//enabling cors in the app
app.use(cors());

//routing for the home page
app.get("/", (req, res) => res.send({ title: "hello world" }))

//running the express app on localhost 9000
app.listen(9000, () => console.log("App is running on part 9000"))
