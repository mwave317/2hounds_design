import React, { Component } from 'react';

export default class Harness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

  }

  render () {
    return (
      <div>
        <p>Harness</p>
      </div>
    );

  };
};
