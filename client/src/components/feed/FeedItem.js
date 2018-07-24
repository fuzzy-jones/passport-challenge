import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';

import { deleteBranch } from '../../actions/treeActions';

import "./styles/FeedItem.css";

class FeedItem extends Component {

    onUpdate(id) {
        console.log(id);
    }

    // method to delete a branch with the onClick event on the delete button
    onDelete(id) {
        this.props.deleteBranch(id);
    }

    render() {
        const { branch } = this.props;
        
        return (
        <div className="branchList">
            <ul>
                <li>
                    <div className="branchWrapper">
                        <aside>
                            <h3 className="branchTitle">{branch.title}    
                                <button onClick={this.onUpdate.bind(this, branch._id)} type="button" className="btn btn-success"><i className="fas fa-edit"/></button>
                                <button onClick={this.onDelete.bind(this, branch._id)} type="button" className="btn btn-danger"><i className="far fa-trash-alt"/></button>
                            </h3>
                        </aside>
                    </div>
                    <ul>
                        <li className="leaf">{branch.leaves.length}</li>
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