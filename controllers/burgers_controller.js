// importing express and burger js
var express = require("express");
var burger = require("../models/burger.js");

//router
router.get("/", function(req, res) {
    burger.all(function(data) {
      var burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });

  
router.post("/", function(req, res) {
    burger.new(req.body.newBurger, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/", function(req, res) {
    //var condition = "id = " + req.body.burgerid;
    console.log("condition= " + req.body.burgerid);
  
    burger.update(req.body.burgerid,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  