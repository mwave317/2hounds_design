import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

  }

  render() {
    return (
      <div>
        <p>Cart</p>
      </div>

    );
  };
};
