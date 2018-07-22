import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import "./styles/Landing.css";
import logo from "./styles/images/totoro.gif";

class Landing extends Component {

  // life cycle methods
  // so the user cant manually type in login or landing routes if they are already logged in
  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <img className="img-responsive" src={logo} alt="tree logo"/>
        <h1>Passport Tree Challenge</h1>
        <p>Sign up or Log in to access and edit the tree</p>
        <Link type="button" to="/register" className="btn btn-lg btn-primary" id="signup-button">Sign Up</Link>
        <Link type="button" to="/login" className="btn btn-lg btn-primary" id="login-button">Login</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.authentication
});

export default connect(mapStateToProps)(Landing);

