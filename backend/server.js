const express = require("express");
//creating an express application
const app = express();

// we can to be able to take incoming request from the client. 
// we use cors for that
const cors = require("cors");

// we NEED express.json() and express.urlencoded() for POST and PUT requests, 
// because in both these requests you are sending data 
// (in the form of some data object) to the server and you are asking the server to accept 
// or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
app.use(express.json()); // for post (create) request
app.use(express.urlencoded()) //for put (update) request

//enabling cors in the app
app.use(cors());

//creating the user route to handle users request
const userRouter = require("./routes/userRoute");

//connecting to mongo db 
const dbConnect = require("./config/dbConnect");


//routing for the home page
app.get("/", (req, res) => res.send({ title: "hello world" }))

app.use("/user", userRouter)

//running the express app on localhost 9000
app.listen(9000, () => console.log("App is running on part 9000"))
