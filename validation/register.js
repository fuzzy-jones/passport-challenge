const Validator = require('validator');
// import the isEmpty function from is-empty.js
const isEmpty = require('./is-empty');

// take in data to access from outside
module.exports = function validateRegisterInput(data) {
    let errors = {};

    // use isEmpty function to store in data to use validators below
    // if field is not empty, set it to data input, else set it to empty string to use for validator that only checks for empty string
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    // password 2 to confirm password
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    // if !validator, isLength method to pass in the data name
    // take in second parameter, minimum length of 2 and max of 30
    if (!Validator.isLength(data.name, { min: 2, max: 30})) {
        // if the requirements arent met, the name field will print an error with the requirements
        errors.name = 'Name must be between 2 and 30 characters';
    }

    // validate for empty name field
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }

    // validate for empty email field
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    // validate for invalid email field
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email address';
    }

    // validate for empty password field
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    // validate for password length
    if (!Validator.isLength(data.password, {min: 6, max: 40})) {
        errors.password = 'Password must be at least 6 characters';
    }

    // validate for empty password 2 field
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password is required';
    }

    // validate if password and password2 equal each other
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    // return an object with the errors
    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}