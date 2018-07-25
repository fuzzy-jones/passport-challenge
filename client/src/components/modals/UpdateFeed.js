import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpdateForm from './UpdateForm';

class UpdateFeed extends Component {
    render() {
        const { branches } = this.props;
        
        // mapping over the branches in the db tree, making branch with key of each branches id and passing props to FeedItem for dynamic display of data
        return branches.map(branch => <UpdateForm key={branch._id} branch={branch} />)
    }
}

UpdateFeed.propTypes = {
    branches: PropTypes.array.isRequired
}

export default UpdateFeed;
