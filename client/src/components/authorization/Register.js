import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authorizationActions';

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

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
            // get the errors from redux state
            // gets put into props with mapStateToProps
            // once new properties are received, if errors is included then set it to the errors above in Component state
        }
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

        // this.props.history will redirect within the action instead of component
        this.props.registerUser(newUser, this.props.history);
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    // set auth as a prop inside component, authentication comes from reducers/index.js the root reducer
    auth: state.authentication,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
