import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles/leafItem.css'

class LeafItem extends Component {
  render() {
      const { leaf } = this.props;

    return (
      <div className="row">
      <div className="col-md-3 offset-md-1">
      <li className="leafList"><span><p><i className="fas fa-leaf" id="leafIcon"></i>{leaf}</p></span></li>
      </div>
      </div>
    )
  }
}

LeafItem.propTypes = {
    leaf: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
 
})

export default connect(mapStateToProps)(LeafItem);
