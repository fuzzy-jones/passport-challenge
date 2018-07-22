import axios from 'axios';

import { ADD_BRANCH, GET_ERRORS } from './types';

// add branch to tree
export const addBranch = (branchData) => dispatch => {
    axios.post('/api/branches', branchData)
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
        )
}

// get all branches from DB
// export const getBranches = () => dispatch => {
//     // call the end point, if it finds data it will dispatch the payload
//     axios.get('/api/branches')
//         .then(res =>
//             dispatch({
//                 type: GET_BRANCHES,
//                 payload: res.data
//             })
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_BRANCHES,
//                 payload: {}
//             })
//         )
// }