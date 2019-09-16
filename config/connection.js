// Set up MySQL connection.
var mysql = require("mysql");
var PORT = process.env.PORT || 3306;

var connection = mysql.createConnection({
  host: "localhost",
  port: PORT,
  user: "root",
  password: "Racami2019!",
  database: "burgers_db"
});
console.log("testing the connection");
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
