//import express module
var express = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//import db_properties
var prop = require("../config/db_properties");
//import token
var my_fun = require("../token/token");
//create the router instance
var router = express.Router();
//create the Rest API
router.post("/",function(req,res){  
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    //compare with database
    connection.query("select * from login_details where uname='"+uname+"' and upwd='"+upwd+"'",
                    function(err,recordsArray,fields){
        if(recordsArray.length>0){
            var token = my_fun({'uname':uname,'upwd':upwd},'hr@tcs.com');
            prop.token = token;
            res.send({"login":"success","token":token});
        }else{
            res.send({"login":"fail"});
        };
    });
});
module.exports = router;