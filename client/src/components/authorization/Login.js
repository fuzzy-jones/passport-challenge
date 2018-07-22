import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authorizationActions';


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

    // life cycle methods
    // so the user cant manually type in login or landing routes if they are already logged in
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        // check if user is authenticated
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
            // get the errors from redux state
            // gets put into props with mapStateToProps
            // once new properties are received, if errors is included then set it to the errors above in Component state
        }
    }

    // componentDidUpdate() {
    //     const { isAuthenticated } = this.props.auth;
    //     if (isAuthenticated) {
    //       this.props.history.push("/dashboard");
    //     }
    // }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData);
    }

    render() {
            const { errors } = this.state;

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <h1>Log in</h1>
                        <p>Sign in to your account to access the tree</p>
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <input type="email" className={classnames("form-control", {'is-invalid': errors.email})} placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange.bind(this)}/>
                                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                </div>
                                <div className="form-group">
                                    <input type="password" className={classnames("form-control", {'is-invalid': errors.password})} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange.bind(this)}/>
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.authentication,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
