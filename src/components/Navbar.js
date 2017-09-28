import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
