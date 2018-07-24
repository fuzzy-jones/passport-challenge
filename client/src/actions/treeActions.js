import axios from 'axios';

import { ADD_BRANCH, GET_ERRORS, GET_BRANCHES, DELETE_BRANCH } from './types';

// add branch to tree
export const addBranch = (treeData) => dispatch => {
    axios.post('/api/branches', treeData)
        .then(res => 
            dispatch({
                type: ADD_BRANCH,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// get all branches from DB
export const getBranches = () => dispatch => {
    // call the end point, if it finds data it will dispatch the payload
    axios.get('/api/branches')
        .then(res =>
            dispatch({
                type: GET_BRANCHES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_BRANCHES,
                payload: null
            })
        )
};

// delete branch
export const deleteBranch = id => dispatch => {
    // back ticks in route to use variable without concatenating 
    axios.delete(`/api/branches/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_BRANCH,
                // send id
                payload: id
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
