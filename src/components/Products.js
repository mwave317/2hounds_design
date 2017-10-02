import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
class Products extends Component {

  render () {
    const image = this.props.products.items[0].sizeSku.map(sizeSku => <Link to="/product"><img src={sizeSku.image} /></Link>);

    return (
    <div>
        {image}
    

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
