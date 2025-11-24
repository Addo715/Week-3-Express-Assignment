<<<<<<< HEAD
const express = require("express")

//Intialization
const server = express()

//controller
const Homepage = (req,res)=>{
    res.send("This is the home page")
}

const Products = (req,res)=>{
    res.send("This is my Product page")
}

const Gallery = (req,res)=>
    res.send("Pictures from the Gallery")

const About = (req,res)=>{
    res.send("This is my About Page")
}

const Contact = (req,res) =>{
    res.send("This is my Contact page")
}


//routes
server.use('/Products',Products)
server.use('/Gallery', Gallery)
server.use('/About', About)
server.use('/Contact', Contact)
server.use('/',Homepage)


// starting server
server.listen(3000, ()=> console.log("server is working on port 3000"))
=======
// import express moudule
const express = require("express")
const mongoose = require("mongoose")

//load environment variables from .env file
require('dotenv').config();

//import bank routes
const BankRoutes = require("./routes/bankRoutes");
const AccountsRoutes = require("./routes/accountsRoutes");
const UsersRoutes = require("./routes/usersRoutes");

// create an express server
const server = express();

// middleware to parse JSON requests
server.use(express.json());


//routes
server.use(AccountsRoutes);
server.use(BankRoutes);
server.use(UsersRoutes);

//Port configuration
const PORT = process.env.PORT || 5000;

// connect to MongoDb
mongoose.connect(
    process.env.MONGO_URI,
)

// start a server
server.listen(PORT, ()=>{console.log("server is runing on port 3000")})

>>>>>>> 336d3dbbc1b32a5e0d8c77444480b997ce24c367
