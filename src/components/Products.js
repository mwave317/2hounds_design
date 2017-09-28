import React, { Component } from 'react';
import Product from './Product';

import { connect } from 'react-redux';
export default class Products extends Component {

  render () {

    return (
    <div>
      <p>This is where the products go</p>
      <Product/>
    </div>
    );
  };
};
