// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

// API routes
const users = require('./routes/api/users');
const branches = require('./routes/api/branches');

// Initialize Express
const app = express();

// Sets up the Express app to handle data parsing using body-parser package
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

// port
const port = process.env.PORT || 8080; 

// START THE SERVER
app.listen(port);
console.log('listening on port ' + port);


