const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// bring in Branch model
const Branch = require('../../models/Branch');

// validation for inputs
const validateBranch = require('../../validation/branch');

// GET api/branches/test
// test that branches route works
router.get('/test', (req, res) => res.json({ message: 'branch route works'}));

// Get api/branches
// get all branches to display
router.get('/', (req, res) => {
    // maybe a sort to sort newest first here
    Branch.find()
        .then(branches => res.json(branches))
        .catch(err => res.status(404).json({ message: 'There are no branches' }));
});

// POST api/branches
// create a new branch
// private route only authorized users can create a branch
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateBranch(req.body);

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

// DELETE  api/branches/:id
// delete a single branch
// private route for logged in users
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Branch.findById(req.params.id)
        .then(branch => {
            branch.remove().then(() => res.json({ message: "branch deleted"}));
        })
        .catch(err => res.status(404).json({ message: 'Branch not found' }));

})

// PUT api/branches/:id
// update a branch title
// private route for logged in users
router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => { 
    Branch.findById(req.params.id)
        .then(branch => {
            branch.title = req.body.title;
            branch.leaves = req.body.leaves.split(',');
            branch.save().then(branch => res.json(branch));
        })
        .catch(err => res.status(404).json({ message: 'Updated branch title' }));
})

module.exports = router;