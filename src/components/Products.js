import React, { Component } from 'react';
import Product from './Product';
import products from '../products';
export default class Products extends Component {
  constructor(props) {
    super(props);

  }

  render () {

    return (
    <div>
      <p>This is where the products go</p>
      <Product/>
    </div>
    );
  };
};
