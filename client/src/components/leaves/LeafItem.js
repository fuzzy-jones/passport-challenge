import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles/leafItem.css'

class LeafItem extends Component {
  render() {
      const { leaf } = this.props;

    return (
      <li className="leafList"><p>{leaf}</p></li>
    )
  }
}

LeafItem.propTypes = {
    leaf: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
 
})

export default connect(mapStateToProps)(LeafItem);
