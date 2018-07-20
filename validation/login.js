const Validator = require('validator');
// import the isEmpty function from is-empty.js
const isEmpty = require('./is-empty');

// take in data to access from outside
module.exports = function validateLogin(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    // validate for invalid email field
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email address';
    }

    // validate for empty email field
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    // validate for empty password field
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    // return an object with the errors
    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}