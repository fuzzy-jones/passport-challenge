const express = require("express");
const router = express.Router();
//  bcrypt to encrypt user password
const bcrypt = require('bcryptjs');

// bring in user model
const User = require('../../models/User');

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
    // looking for a record of existing email, using findOne
    User.findOne({ email: req.body.email})
        .then(user => {
            // if user already exists send a 400 status and email exists message, else create a new user if no account exists with email provided
            if (user) {
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

module.exports = router;