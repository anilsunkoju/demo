var express = require("express");
var mongodb = require("mssql");
var miniproject = mongodb.MongoClient;
var prop = require("../config/db_properties");
var router = express.Router();
router.post("/",function(req,res){
    var token = req.body.token;
    if(token == prop.token){
        miniproject.connect("mongodb://localhost:27017/poc",function(err,db){
            db.collection("contact").find().toArray(function(err,array){
                res.send(array);
            });
        });
    }else{
        res.send("UnAuthorized User...!");
    }
});
module.exports = router;