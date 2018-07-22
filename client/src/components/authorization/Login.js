import React, { Component } from 'react'
import "./styles/Login.css"; 

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password

        }

        console.log(user);
    }

  render() {
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1>Log in</h1>
                    <p>Sign in to your account to access the tree</p>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange.bind(this)}/>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary" id="login-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Login;
