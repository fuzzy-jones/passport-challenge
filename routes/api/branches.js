const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// bring in Branch model
const Branch = require('../../models/Branch');

// validation for inputs
const validateBranchInput = require('../../validation/branch');

// GET api/branches/test
// test that branches route works
router.get('/test', (req, res) => res.json({ msg: 'branch route works'}));

// POST api/branches
// create a new branch
// private route only authorized users can create a branch
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateBranchInput(req.body);

    // validation check
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const newBranch = new Branch ({
        title: req.body.title,
        leaves: req.body.leaves.split(',')
    });

    newBranch.save().then(branch => res.json(branch));

});

module.exports = router;