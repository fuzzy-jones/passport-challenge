import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { addBranch } from '../../actions/treeActions';
// import UnAuth from './UnAuth';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            number: '',
            minNumber: '',
            maxNumber: '',
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

    // numberGenerator() {
    //     let leafNumber = this.state.number;
    //     console.log(leafNumber);
    //     var leafArray = [];
    //     console.log(leafArray);
    //     for (let i = 0; i < leafNumber; i++) {
    //         var randomNumber = Math.floor((Math.random() * this.state.maxNumber) + this.state.minNumber);
    //         console.log(randomNumber);
    //         leafArray.push(randomNumber);
    //     }
    // }

    onSubmit(event) {
        event.preventDefault();
        // generating the random numbers based on the inputs from the form
        let leafNumber = this.state.number;
        var leafArray = [];
        // run a loop to the amount of the numbers chosen
        // then generate set of random numbers to the min and max input on the form
        // turn the numbers into a string and push them into an array. then .join() when passing to the newBranch so it can pass into the DB
        for (let i = 0; i < leafNumber; i++) {
            var randomNumber = Math.floor((Math.random() * this.state.maxNumber) + this.state.minNumber);
            var stringNumbers = randomNumber.toString();
            leafArray.push(stringNumbers);
        }
        
        // if ('is-invalid') {
        //     console.log("field validation is required");
        // } else {
        const newBranch = {
            title: this.state.title,
            leaves: leafArray.join()
        }

        // this.props.history will redirect within the action, instead of component
        this.props.addBranch(newBranch);
        this.setState({ title: '', leaves: ''});
        // need to redirect back to dashboard page after successful branch submit
        // window.location.reload();
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <div className="modal fade" id="createBranchModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                        <aside>
                                            <p>How many numbers for this branch</p>
                                            <select name="number" value={this.state.number} onChange={this.onChange.bind(this)}> 
                                                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>
                                            </select>
                                            {errors.leaves && (<div className="invalid-feedback">{errors.leaves}</div>)}
                                        </aside>
                                        <aside>
                                            <p>Number Range</p>
                                            <input type="text" placeholder="Minimum Number" name="minNumber" value={this.state.minNumber} onChange={this.onChange.bind(this)} id="minNum"/>
                                            
                                            <input type="text" placeholder="Maximum Number" name="maxNumber" value={this.state.maxNumber} onChange={this.onChange.bind(this)} id="maxNum"/>
                                            
                                        </aside>
                                        {/* <input type="text" className={classnames("form-control", {'is-invalid': errors.leaves})} placeholder="Random Numbers" name="leaves" value={this.state.leaves} onChange={this.onChange.bind(this)}/>
                                        {errors.leaves && (<div className="invalid-feedback">{errors.leaves}</div>)} */}
                                    </div>
                                    <button type="submit" className="btn btn-lg btn-success" id="branch-submit">Submit</button>
                                </form>
                            </div>
                        </div>
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
