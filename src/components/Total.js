import React from 'react';

import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
      {/* <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4> */}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps)(Total);
