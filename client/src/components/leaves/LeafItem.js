import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LeafItem extends Component {
  render() {
      const { leaf } = this.props;

    return (
      <li>{leaf}</li>
    )
  }
}

LeafItem.propTypes = {
    leaf: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
 
})

export default connect(mapStateToProps)(LeafItem);
