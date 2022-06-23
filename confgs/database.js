var mysql = require("mysql2");
require('dotenv').config()
var con = mysql.createConnection({
  host: process.env.DB_Server,
  user: process.env.DB_User,
  password: process.env.DB_Password,
  database: process.env.DB_NAME,
  port: process.env.DB_Port,
  insecureAuth : true,
});
function handleDisconnect() {
    con.connect(function (err) {
        if (!err) {
            console.log("Database Connected Successfully!!!");
        } else {
            console.log("Failed to Establish Connection with Mysql with Error: " + err);
        }
    });
}
handleDisconnect()

module.exports = con;
