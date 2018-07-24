import { ADD_BRANCH, GET_BRANCHES } from '../actions/types';

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
            }
        case ADD_BRANCH:
            return {
                ...state,
                branches: [action.payload, ...state.branches]
            }
        default:
            return state;
    }
}