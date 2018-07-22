import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import errorReducer from './errorReducer';
import treeReducer from './treeReducer';

export default combineReducers({
    authentication: authenticationReducer,
    errors: errorReducer,
    tree: treeReducer
});