const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port;
    port: 3300,
  
    // Your username
    user: "root",
  
    password: "",
    database: "employee_DB"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start(); 
  });

  
export default connection;
