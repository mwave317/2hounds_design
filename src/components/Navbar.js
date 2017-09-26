import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import App from '../App';
import About from './About';
import Contact from './Contact';
import BeforeYouOrder from './BeforeYouOrder';
import Account from './Account';
import Cart from './Cart';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/beforeyouorder">Before You Order</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>

      </nav>
    </div>
    );
  }
}
