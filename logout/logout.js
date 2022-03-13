var express = require("express");
var prop = require("../config/db_properties");
var router = express.Router();
router.post("/",function(req,res){
    var token = req.body.token;
    if(token == prop.token){
        prop.token = "";
        res.send({"logout":"success"});
    }else{
        res.send({"logout":"fail"});
    }
});
module.exports = router;