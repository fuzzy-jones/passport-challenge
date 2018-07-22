import isEmpty from '../validation/is-empty';
import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        // case from current user
        case SET_CURRENT_USER:
            return {
                // current state
                ...state,
                // if filled with current user, user should be authenticated
                isAuthenticated: !isEmpty(action.payload),
                // user is payload
                user: action.payload
            }
        default:
            return state;
    }
}