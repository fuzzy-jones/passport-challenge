import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register new user
// async data waiting for response, then dispatch (thunk middleware)
// second parameter of history is Register.js onSubmit
export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
        // if registered and successful then redirect to the login form
        .then(res => history.push('/login'))
        // set the errors to the errors object state
        .catch(err => 
            dispatch({ 
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login user
export const loginUser = (userData) => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            // once we get response
            const { token } = res.data;
            // token to local storage
            localStorage.setItem('jwtToken', token);
            // set to auth header, to authorize the user\
            // setAuthToken comes from utils > setAuthToken
            setAuthToken(token);
            // token includes user info
            // needs to be decoded from bearer to get user data
            const decoded = jwt_decode(token);
            // current user needs to be set, and pass in the decoded user token
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({ 
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// logged in user
export const setCurrentUser = (decoded) => {
    // dispatch to reducer
    return {
        // return user and decoded token info
        // once current user is dispatched it needs to be caught in the auth reducer
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// logout
export const logoutUser = () => dispatch => {
    // remove the token from the local storage
    localStorage.removeItem('jwtToken');
    // remove auth header
    // set it to false, so when utils/setAuthToken checks and token is false it deletes auth header
    setAuthToken(false);
    // set current user to an empty object, which makes authenticated false
    // sets authenticated to false in authenticationReducer.js
    // then user will get send to payload, which will be an empty object, set back to initial state logging user out
    dispatch(setCurrentUser({}));
}