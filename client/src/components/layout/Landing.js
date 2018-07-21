import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styles/Landing.css";
import logo from "./styles/images/totoro.gif";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <img className="img-responsive" src={logo} alt="tree logo"/>
        <h1>Passport Tree Challenge</h1>
        <p>Sign up or Login to access and edit the tree</p>
        <Link type="button" to="/register" className="btn btn-lg btn-primary" id="signup-button">Sign Up</Link>
        <Link type="button" to="/login" className="btn btn-lg btn-primary" id="login-button">Login</Link>
      </div>
    )
  }
}

export default Landing;

