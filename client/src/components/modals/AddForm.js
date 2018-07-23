import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { addBranch } from '../../actions/treeActions';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            leaves: '',
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

        const newBranch = {
            title: this.state.title,
            leaves: this.state.leaves
        }

        // this.props.history will redirect within the action, instead of component
        this.props.addBranch(newBranch);
        this.setState({ title: '', leaves: ''});
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Branch</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control", {'is-invalid': errors.title})} placeholder="Branch Title" name="title" value={this.state.title} onChange={this.onChange.bind(this)}/>
                                    {errors.title && (<div className="invalid-feedback">{errors.title}</div>)}
                                </div>
                                {/* leaves for testing, needs to change and random number logic */}
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control", {'is-invalid': errors.leaves})} placeholder="Random Numbers" name="leaves" value={this.state.leaves} onChange={this.onChange.bind(this)}/>
                                    {errors.leaves && (<div className="invalid-feedback">{errors.leaves}</div>)}
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary" id="branch-submit">Submit</button>
                            </form>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add</button>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

AddForm.propTypes = {
    addBranch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.authentication,
    errors: state.errors
});

export default connect(mapStateToProps, { addBranch })(AddForm);
