import React, { Component } from 'react';
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

        console.log(newUser);
    }
    
    render() {
    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1>Sign Up</h1>
                    <p>Create account to access the tree</p>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange.bind(this)}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange.bind(this)}/>
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
