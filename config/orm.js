// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(callback) {
      var queryString = "SELECT * FROM burgers;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },
    insertOne: function(burgerName, callback) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
  
      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    },
    updateOne: function(burgerid, callback) {
      var queryString = "UPDATE burgers SET devoured = true WHERE id ="+burgerid;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    },
    delete: function(burgerid, cb) {
      var queryString = "DELETE FROM burgers WHERE id = "+burgerid;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;
  