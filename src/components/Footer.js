import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../img/facebook.png';
import Twitter from '../img/twitter.png';

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
        <li><Link to='/terms'>TERMS OF USE</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to='/PRIVACY'>PRIVACY POLICY</Link></li>
        <li><a href="https://www.facebook.com/2houndsdesign">
        <img src={Facebook} alt="Facebook"></img></a></li>
        <li><a href="https://twitter.com/2houndsdesign">
        <img src={Twitter} alt="Twitter"></img></a></li>
    </ul>
    </div>
    );

  };
};
