var prop = require("./db_properties");
var mysql = require("mysql");
module.exports = {
    getConnection       :       function(){
        return mysql.createConnection({
            host    :   prop.mysql_host,
            user    :   prop.mysql_user,
            password:   prop.mysql_password,
            database:   prop.mysql_database
        })
    }
};