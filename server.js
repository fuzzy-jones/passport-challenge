// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require('passport');
const path = require('path');

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

// // test route
// app.get('/', function(req, res) {
//     res.send('hello world');   
// });

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// routes
app.use('/api/users', users);
app.use('/api/branches', branches);

// server static assets in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// port
const port = process.env.PORT || 8080; 

// START THE SERVER
app.listen(port);
console.log('listening on port ' + port);


