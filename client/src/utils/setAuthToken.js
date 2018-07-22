// set default header for axios
import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        // apply to all the user requests
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // if token isnt there, then delete the auth header
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;