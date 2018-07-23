import React, { Component } from 'react';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addBranch } from '../../actions/treeActions';
import AddForm from '../modals/AddForm';

import "./styles/Dashboard.css";
import logo from "./styles/images/branch.PNG";

class Dashboard extends Component {
    render() {
        // const { errors } = this.state;

        return (
            <div className="container">
                <img className="img-responsive" src={logo} alt="branch logo" id="branch-logo"/>
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Create a new Branch</button>
                    </div>
                </div>


                {/* add branch modal component */}
                <AddForm />

            </div>

        )
    }
}

export default Dashboard;
// export default connect(null, { getBranches })(Dashboard);
