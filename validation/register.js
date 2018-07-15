const Validator = require('validator');
// import the isEmpty function from is-empty.js
const isEmpty = require('./is-empty');

// take in data to access from outside
module.exports = function validateRegisterInput(data) {
    let errors = {};

    // if not validator, isLength method to pass in the data name
    // take in second parameter, minimum length of 2 and max of 30
    if (!Validator.isLength(data.name, { min: 2, max: 30})) {
        // if the requirements arent met, the name field will print an error with the requirements
        errors.name = 'Name must be between 2 and 30 characters';
    }

    // return an object with the errors
    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}