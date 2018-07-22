import React, { Component } from 'react';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addBranch } from '../../actions/treeActions';

import "./styles/Dashboard.css";
import logo from "./styles/images/totoro.jpg";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            leaves: [],
            errors: {}
        }
    }

    render() {
        // const { errors } = this.state;

        return (
            <div className="container">
                <img className="img-responsive" src={logo} alt="tree logo"/>
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Create a new Branch</button>
                    </div>
                </div>
           
                {/* add branch modal */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Add Branch</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                            
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Add</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Dashboard;
// export default connect(null, { getBranches })(Dashboard);
