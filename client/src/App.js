import React, { Component } from 'react';
// BrowserRouter mimics standard server and can use back and forward buttons
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

import Login from "./components/authorization/Login";
import Register from "./components/authorization/Register";

import './App.css';

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
 