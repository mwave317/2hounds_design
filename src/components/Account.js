import React, { Component } from 'react';

export default class Account extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
    };

  }

  render() {
    return (
      <div>
        <p>Account</p>
      </div>
    );

  };
};
