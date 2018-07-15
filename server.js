// Dependencies
const express = require("express");
const mongoose = require('mongoose');
// const bodyParser = require("body-parser");

// API routes
const users = require('./routes/api/users');
const branches = require('./routes/api/branches');

// Initialize Express
const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// mongoose to connect to mongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

app.get('/', function(req, res) {
    res.send('hello world');   
});

// routes to files
app.use('/api/users', users);
app.use('/api/branches', branches);

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// port
const port = process.env.PORT || 8080; 

// START THE SERVER
app.listen(port);
console.log('listening on port ' + port);


