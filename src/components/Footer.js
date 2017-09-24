import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

  }

  render() {
    return (
      <div>
      <ul>
        <li><Link to='/newsletter'>NEWSLETTER</Link></li>
        <li><Link to='/terms'>TERMS AND CONDITIONS</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to='/PRIVACY'>PRIVACY POLICY</Link></li>
    <li><a href="https://www.facebook.com/2houndsdesign">
    <img src='../img/facebook.png'></img></a></li>
    <li><a href="https://twitter.com/2houndsdesign">
    <img src='./img/twitter.png'></img></a></li>
    </ul>
    </div>
    );

  };
};
