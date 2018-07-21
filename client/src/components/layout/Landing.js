import React, { Component } from 'react';
import "./styles/Landing.css";
import logo from "./styles/images/totoro.gif";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <img className="img-responsive" src={logo} alt="tree logo"/>
        <h1>Passport Tree Challenge</h1>
        <p>Sign up or Login to access and edit the tree</p>
        <button type="button" className="btn btn-success" id="signup-button">Sign Up</button>
        <button type="button" className="btn btn-light" id="login-button">Login</button>
      </div>
    )
  }
}

export default Landing;

