// importing the om file
var orm = require("../config/orm.js");


var burger = {
    all: function(callback) {
      orm.selectAll(function(res) {
        callback(res);
      });
    },
    // The variables cols and vals are arrays.
    new: function(burgerN, callback) {
      orm.insertOne(burgerN, function(res) {
        callback(res);
      });
    },
    update: function(bID, callback) {
      orm.updateOne(bID, function(res) {
        callback(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  