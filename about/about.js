var express = require("express");
var conn = require("../config/db_connection");
var connection = conn.getConnection();
connection.connect();
var prop = require("../config/db_properties");
var router = express.Router();
router.post("/",function(req,res){
    var token = req.body.token;
    if(token == prop.token){
        connection.query("select * from about",function(err,recordsArray,fields){
            res.send(recordsArray);
        });
    }else{
        res.send("UnAuthorized User...!");
    }
});
module.exports = router;