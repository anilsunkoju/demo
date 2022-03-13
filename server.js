//import express module
var express = require("express");
//import body-parser module
var bodyparser = require("body-parser");
//import cors module
var cors = require("cors");
//create the rest object
var app = express();
//enable the cors
app.use(cors());
//set the json as mime type
app.use(bodyparser.json());
//parse the json
app.use(bodyparser.urlencoded({extended:false}));
//import login module
var login = require("./login/login");
app.use("/login",login);
//import about module
var about = require("./about/about");
app.use("/about",about);
//import contact module
var contact = require("./contact/contact");
app.use("/contact",contact);
//import portfolio module
var portfolio = require("./portfolio/portfolio");
app.use("/portfolio",portfolio);
//import logout module
var logout = require("./logout/logout");
app.use("/logout",logout);
//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");