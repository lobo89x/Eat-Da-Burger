// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var pid = "#" + $(this).data("id");
      $(pid).addClass("munched-burger");
      console.log("this is the id you click::: "+id)
      var burger_name = $(this).data("name");
      var burger = {
        burgerid: id
      };
  
      // time out cll back fxn 
      setTimeout(function () {
        // Send the PUT request.
        $.ajax("/", {
          type: "PUT",
          data: burger
        }).then(
          function() {
            console.log("you ate this burger::  ", burger_name);
            // Reload the page to get the updated list
            location.reload();
          }
        );

      }, 5000);
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurgerObj = {
        newBurger: $("#burgerNinput").val().trim()
      };
  
      // Sending the POST request.
      $.ajax("/", {
        type: "POST",
        data: newBurgerObj
      }).then(
        function() {
          console.log("inserted new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
      console.log("this is the id you click::: "+id)
      var burger_name = $(this).data("name");
      var burger = {
        burgerid: id
      };
  
  
      // Send the DELETE request.
      $.ajax("/", {
        type: "DELETE",
        data: burger
      }).then(
        function() {
          console.log("deleted burger id:: " + id + "Named :: " + burger_name );
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  