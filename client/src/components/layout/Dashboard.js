import React, { Component } from 'react';
// import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddForm from '../modals/AddForm';

import { getBranches } from '../../actions/treeActions';

import Feed from '../feed/Feed';
import UpdateFeed from '../modals/UpdateFeed';

import "./styles/Dashboard.css";
import logo from "./styles/images/branch.PNG";

class Dashboard extends Component {
    componentDidMount() {
        this.props.getBranches();
    }

    render() {
        const { branches } = this.props.tree;
        let feedContent;

        feedContent = <Feed branches={branches} />

        let feedContent2;

        feedContent2 = <UpdateFeed branches={branches} />

        return (
            <div className="container">
                <img className="img-responsive" src={logo} alt="branch logo" id="branch-logo"/>
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <button type="button" className="btn btn-lg btn-success" data-toggle="modal" data-target="#createBranchModal">Create a new Branch</button>
                    </div>
                </div>

                <AddForm />
                {feedContent}
                {feedContent2}

            </div>

        )
    }
}

Dashboard.propTypes = {
    getBranches: PropTypes.func.isRequired,
    tree: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tree: state.tree
});

// export default Dashboard;
export default connect(mapStateToProps, { getBranches })(Dashboard);
