import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
class Products extends Component {

  render () {

    return (
    <div>

      <Product />
    </div>
    );
  };
};
export function mapState2props(state) {
  return {
    products: state.products,
  };
}

export default connect(mapState2props)(Products);
