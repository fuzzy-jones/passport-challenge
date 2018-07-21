import React, { Component } from 'react';
// import link to link the routing signup and login to the page routes
import { Link } from 'react-router-dom';
import "./styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Passport Challenge</Link>
            {/* responsive hamburger button */}
            <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fa fa-bars fa-1x"></i></span></button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto" id="nav-links">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default Navbar;
