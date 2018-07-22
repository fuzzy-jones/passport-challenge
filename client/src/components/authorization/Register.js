import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authorizationActions'

import "./styles/Register.css"; 

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        // console.log(newUser);
        // axios.post('/api/users/register', newUser)
        //     .then(res => console.log(res.data))
        //     // set the errors to the errors object state
        //     .catch(err => this.setState({ errors: err.response.data }));


        this.props.registerUser(newUser);
    }
    
    render() {
        // const errors = this.state.errors;
        const { errors } = this.state;

        const { user } = this.props.auth;

    return (
        <div className="register">
            { user ? user.name : null }
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1>Sign Up</h1>
                    <p>Create account to access the tree</p>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text" className={classnames("form-control", {'is-invalid': errors.name})} placeholder="Name" name="name" value={this.state.name} onChange={this.onChange.bind(this)}/>
                                {/* display the errors.name from the server validation to the client */}
                                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                            </div>
                            <div className="form-group">
                                <input type="email" className={classnames("form-control", {'is-invalid': errors.email})} placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange.bind(this)}/>
                                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <input type="password" className={classnames("form-control", {'is-invalid': errors.password})} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange.bind(this)}/>
                                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                            </div>
                            <div className="form-group">
                                <input type="password" className={classnames("form-control", {'is-invalid': errors.password2})} placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange.bind(this)}/>
                                {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary" id="register-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    // putting authentication state in a property of auth, authentication comes from reducers/index.js the root reducer
    auth: state.authentication
})

export default connect(mapStateToProps, { registerUser })(Register);
