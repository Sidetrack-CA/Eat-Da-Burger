// setup dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Setup port for both heroku and local
var app = express();
var PORT = process.env.PORT || 8080;

// setup a root directory to serve the main page
app.use(express.static("public"));

// Create setup for handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// middleware application parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Setup node to listen for input
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});