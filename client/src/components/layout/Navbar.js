import React, { Component } from 'react';
// import link to link the routing signup and login to the page routes
import { Link } from 'react-router-dom';
// import redux to access the auth state
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authorizationActions';

import "./styles/Navbar.css";

class Navbar extends Component {
    // log out click function
    onLogoutClick(event) {
        event.preventDefault();
        this.props.logoutUser();
        this.logOutToHome();
    }

    logOutToHome() {
        window.location.href = '/';
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="/" onClick={this.onLogoutClick.bind(this)} className="nav-link">Logout</a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Passport Challenge</Link>
                {/* responsive hamburger button */}
                <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fa fa-bars fa-1x"></i></span></button>
                <div className="collapse navbar-collapse" id="navbarText">
                    {isAuthenticated ? userLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

// bring in auth state with mapStateToProps
const mapStateToProps = (state) => ({
    auth: state.authentication
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
