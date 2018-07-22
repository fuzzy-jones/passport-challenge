const isEmpty = (value) => {
    return (
        // check for undefined, null, empty object and string
        value === undefined ||
        value === null || 
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}

export default isEmpty;