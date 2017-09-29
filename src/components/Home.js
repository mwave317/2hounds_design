import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {

    return (
      <div>
        <p>Home Component</p>
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
