import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';

import { deleteBranch } from '../../actions/treeActions';

import LeafFeed from '../leaves/LeafFeed';

import "./styles/FeedItem.css";

class FeedItem extends Component {

    onUpdate(id) {
        this.props.updateBranch(id);
    }

    // method to delete a branch with the onClick event on the delete button
    onDelete(id) {
        this.props.deleteBranch(id);
    }

    render() {
        const { branch } = this.props;

        // console.log(branch.leaves);
        // for (let i = 0; i < branch.leaves.length; i++) {
        //     let leaves = branch.leaves[i];
        //     console.log(leaves);
        // }

        return (
        <div className="branchList">
            <ul>
                <li>
                    <div className="branchWrapper">
                        <aside>
                            <h2 className="branchTitle">{branch.title}    
                                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#updateModal"><i className="fas fa-edit"/></button>
                                <button onClick={this.onDelete.bind(this, branch._id)} type="button" className="btn btn-danger"><i className="far fa-trash-alt"/></button>
                            </h2>
                        </aside>
                    </div>
                    <ul className="leafReturn">
                        <LeafFeed leaves={branch.leaves} />
                    </ul>
                </li>
            </ul>
        </div>
        )
    }
}

FeedItem.propTypes = {
    deleteBranch: PropTypes.func.isRequired,
    branch: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
 
})

export default connect(mapStateToProps, { deleteBranch })(FeedItem);