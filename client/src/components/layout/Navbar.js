import React, { Component } from 'react';
import "./styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Passport Challenge</a>
            {/* response hamburger button */}
            <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fa fa-bars fa-1x"></i></span></button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto" id="nav-links">
                    <li className="nav-item">
                        <a className="nav-link">Sign Up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default Navbar;
