import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store';
class Cart extends Component {

  render() {
    return (
      <div>
        <p>{this.props.products.items.name}{this.props.products.items.color}{this.props.products.items.size}{this.props.products.items.sizeSku}</p>
      </div>

    );
  };
};

export function mapState2props(state) {
  return {
    products: state.products,
  };
}

export function mapDispatch2props(dispatch) {
  return {
  };
};

export default connect(mapState2props, mapDispatch2props)(Cart);
