import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

  }

  render() {
    return (
      <div>
        <p>Contact</p>
      </div>
    );
  };
};
