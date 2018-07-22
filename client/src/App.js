import React, { Component } from 'react';
// BrowserRouter mimics standard server and can use back and forward buttons
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authorizationActions';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

import Login from "./components/authorization/Login";
import Register from "./components/authorization/Register";

import './App.css';

// token checker
if (localStorage.jwtToken) {
  // set token header
  setAuthToken(localStorage.jwtToken);
  // decode token and get info
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user isAuthenticated
  // store.dispatch calls anything in the store
  store.dispatch(setCurrentUser(decoded));

  // expired time logout user
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    // if expiration is less than current time than logout user
    store.dispatch(logoutUser());
    // redirect to login page if token expires
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      // Provider is used to wrap Router to provide the redux store
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
            {/* exact paths are for components that will have routes to access them */}
            <Route exact path="/" component={ Landing } />

            <div className="container">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
            </div>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
 