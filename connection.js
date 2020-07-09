const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "127.0.0.1",
  
    // Your port;
    port: 3306,
  
    // Your username
    user: "root",
  
    password: "Bilon$$555",
    database: "employee_db"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start(); 
  });
  module.exports = connection