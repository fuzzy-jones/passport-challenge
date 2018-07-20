const Validator = require('validator');
// import the isEmpty function from is-empty.js
const isEmpty = require('./is-empty');

module.exports = function validateBranch(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.leaves = !isEmpty(data.leaves) ? data.leaves : '';

    // if !validator, isLength method to pass in the data title
    // take in second parameter, minimum length of 2 and max of 30
    if (!Validator.isLength(data.title, { min: 2, max: 30})) {
        // if the requirements arent met, the title field will print an error with the requirements
        errors.title = 'Branch Title must be between 2 and 30 characters';
    }

    // validate for empty title field
    if (Validator.isEmpty(data.title)) {
        errors.title = 'Branch Title is required';
    }

    // validate for empty leaves field
    if (Validator.isEmpty(data.leaves)) {
        errors.leaves = 'Field is required';
    }

    // return an object with the errors
    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}