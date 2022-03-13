var express = require("express");
var mssql = require("mssql");
var prop = require("../config/db_properties");
var router = express.Router();
router.post("/",function(req,res){
    var token = req.body.token;
    if(prop.token == token){
        mssql.connect({user:prop.sqlserver_user,
                       password:prop.sqlserver_password,
                       server:prop.sqlserver_server,
                       database:prop.sqlserver_database},function(err){
            if(err){
                console.log("Connection Refused...!");
            }else{
                var request = new mssql.Request();
                request.query("select * from portfolio",function(err,records){
                    res.send(records);
                    mssql.close();
                });
            }
       });
    }else{
        res.send("UnAuthorized User...!");
    }
});
module.exports = router;