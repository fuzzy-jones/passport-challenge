const express = require("express");
const router = express.Router();
//  bcrypt to encrypt user password
const bcrypt = require('bcryptjs');
// json webtoken
const jwt = require("jsonwebtoken");
const passport = require('passport');

// validation for inputs
const validateRegister = require('../../validation/register');
const validateLogin = require('../../validation/login');

// bring in user model
const User = require('../../models/User');
// bring in keys for token secret
const keys = require('../../config/keys');

// // es5 user test route
// router.get('/test', function(req, res) {
//     res.json({
//         msg: 'users route works'
//     })
// });

// GET api/users/test
// test that users route works
router.get('/test', (req, res) => res.json({ msg: 'users route works'}));

// POST api/users/register
// register a user
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegister(req.body);

    // validation check
    if (!isValid) {
        return res.status(400).json(errors)
    }

    // looking for a record of existing email, using findOne
    User.findOne({ email: req.body.email})
        .then(user => {
            // if user already exists send a 400 status and email exists message, else create a new user if no account exists with email provided
            if (user) {
                // errors.email = 'Email address already being used';
                return res.status(400).json({email: 'Email address already being used'});
            } else {
                // set new user to the model User, with the info filled in on the form
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                // encrypting passwords in database, not plain text
                // generate a salt to store in db
                bcrypt.genSalt(10, (err, salt) => {
                    // generate hash to store in db
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        // set new users password to the hash
                        newUser.password = hash;
                        // save the user, .save() is mongoose, and then make promise to give user created abd send back json response for user
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});

// POST api/users/login
// User Login and return JWT token
router.post('/login', (req, res) => {

    const { errors, isValid } = validateLogin(req.body);

    // validation check
    if (!isValid) {
        return res.status(400).json(errors)
    }

    // store user inputs for email and password in variables
    const email = req.body.email;
    const password = req.body.password;

    // find the user in the db by email
    User.findOne({email: email})
        .then(user => {
            // if user doesn't exists, 404 not found, and display message
            if (!user) {
                // errors.email = 'User Email not found';
                return res.status(404).json({ email: 'User Email not found' });
            }

            // check password using bcrypt to compare hashed password in db to input password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        // res.json({ msg: 'Success' });

                        // User Matched
                        const payload = {
                            id: user.id,
                            name: user.name
                        } 
                        // sign token, from jwt documentation. Set time for token to expire (1 day)
                        jwt.sign(
                            payload, 
                            keys.secretOrKey, 
                            { expiresIn: 86400 }, 
                            // error if is one, then pass in token
                            (err, token) => {
                                // send token as a response
                                res.json({
                                    // get token back if there is a successful login
                                    success: true,
                                    token: 'bearer ' + token
                                })
                            });

                    } else {
                        // errors.password = 'Incorrect Password';
                        return res.status(400).json({ password: 'Incorrect Password' });
                    }
                })
        });
});

// GET api/users/current
// private route to return current user
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    // res.json({ msg: 'Success'});
    // res.json(req.user);
    // write custom response to leave out the user email
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
})


module.exports = router;