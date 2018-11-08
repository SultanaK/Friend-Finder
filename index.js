// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// Routes
app.get("/", function(req, res) {
    res.send("Welcome to Friend finder!");
  } );
//start the server
app.listen(port, function() {
    console.log("Magic! App listening on PORT " + PORT);
  });