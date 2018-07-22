import { createStore, applyMiddleware, compose } from 'redux';
// creating middleware
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// create variable of initialState and set it to an empty object, and pass it as a argument in createStore rather than have an empty object as arg
const initialState = {};

// setting a variable of middleware with array of thunk, and using a spread operator in the store below to avoid object mutation
const middleware = [thunk];

// creating redux store taking in reducer, preloadedState, and enhancer arguments; from documentation https://redux.js.org/api-reference/createstore
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware), 
        // code from guide, used to implement redux chrome extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;