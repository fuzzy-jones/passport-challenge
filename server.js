// Dependencies
var express = require("express");
var mongoose = require('mongoose');
// var bodyParser = require("body-parser");

// Initialize Express
var app = express();

// DB config
var db = require('./config/keys').mongoURI;

// connect to mongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

app.get('/', function(req, res) {
    res.send('hello world');   
});

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// port
var port = process.env.PORT || 8080; 


// var router = express.Router();

// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

// // more routes for our API will happen here

// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/api', router);


// START THE SERVER
app.listen(port);
console.log('listening on port ' + port);


