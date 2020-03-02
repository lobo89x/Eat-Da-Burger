# Eat-Da-Burger

For this tool I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern; use Node and MySQL to query and route data in the app, and Handlebars to generate the HTML. Version 2.0 will include some funky animations as well as a new detail to the data to help me remember if I liked said burger.

 How it works:
This uses handlebars to build a page and build out our cards with buttons for each burger in the data base. The cards with database values devoured = true are on the right but false will be on the left.
 
We can add new burgers to the data base by adding their description to the input field in the middle of the page.
 
Upon click of the button under the input field the JQuery to pull the burger from the input field to to the burger database. Each new burger is added with the value of devoured false by default; thus each new burger will be entered on the left.
 
 

When we have tried the burger, the button next to it can be pressed to toggle its devoured value in the database to true and bring it to the right side.
 
 

If ever we need to remove a burger form our burger data base we can delete it with eh delete button no matter what it’s devoured status.
 

Please try suggesting a few veggie burgers!


