import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
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
        axios.post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            // set the errors to the errors object state
            .catch(err => this.setState({ errors: err.response.data }));
    }
    
    render() {
        // const errors = this.state.errors;
        const { errors } = this.state;

    return (
        <div className="register">
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

export default Register;
