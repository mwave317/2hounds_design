import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Product from './Product';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
  <Product/>
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

export default connect(mapState2props)(Home);
