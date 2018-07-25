import { ADD_BRANCH, GET_BRANCHES, DELETE_BRANCH, UPDATE_BRANCH } from '../actions/types';

const initialState = {
    branches: [],
    branch: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BRANCHES:
            return {
                // current state
                ...state,
                // fill with payload of all the posts
                branches: action.payload
            };
        case ADD_BRANCH:
            return {
                ...state,
                branches: [action.payload, ...state.branches]
            };
        case DELETE_BRANCH:
            return {
                ...state,
                // delete right from state, filter the array of branches, if branch id is not equal to action payload it will return false
                branches: state.branches.filter(branch => branch._id !== action.payload)
            };
        case UPDATE_BRANCH:
            return {
                ...state,
                // delete right from state, filter the array of branches, if branch id is not equal to action payload it will return false
                branches: state.branches.filter(branch => branch._id !== action.payload)
            };
        default:
            return state;
    }
}