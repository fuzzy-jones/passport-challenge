import { ADD_BRANCH } from '../actions/types';

const initialState = {
    branches: [],
    branch: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_BRANCH:
            return {
                ...state,
                branches: [action.payload, ...state.branches]
            }
        default:
            return state;
    }
}