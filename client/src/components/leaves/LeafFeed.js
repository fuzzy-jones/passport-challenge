import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LeafItem from './LeafItem';

class LeafFeed extends Component {
  render() {
      const {leaves} = this.props;

    //   console.log(leaves);

    return leaves.map(leaf => <LeafItem leaf={leaf} key={leaf} />)
  }
}

LeafFeed.propTypes = {
    leaves: PropTypes.array.isRequired
}


export default LeafFeed;

// branchId={branchId}