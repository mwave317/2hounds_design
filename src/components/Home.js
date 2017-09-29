import React, { Component } from 'react';
import Products from './Products';
import { connect } from 'react-redux';

import { Provider } from 'react-redux';
import store from '../store';

class Home extends Component {

  render() {

    return (
      <div>
        <p>Hello</p>
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
    products: function () {
      console.log(this.state.products);
    },
  };
};

export default connect(mapState2props, mapDispatch2props)(Home);
