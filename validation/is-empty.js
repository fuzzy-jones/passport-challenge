// create a global function to check if fields are empty
// validator isEmpty only checks for empty string, this function checks more
// will be used on backend and client side
const isEmpty = (value) => {
    return (
        // check for undefined, null, empty object and string
        value === undefined ||
        value === null || 
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}

module.exports = isEmpty;