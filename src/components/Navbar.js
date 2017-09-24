import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import App from '../App';
import About from './About';
import Contact from './Contact';
import Harness from './Harness';
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
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/harness_fit">Harness fit</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>

      </nav>
      <main>
        <Switch>
          <Route path="/home" component={App} />
          <Route path="/aboutus" component={About} />
          <Route path="/contactus" component={Contact} />
          <Route path="/harness_fit" component={Harness} />
          <Route path="/account" component={Account} />
          <Route path="/cart" component={Cart} />

        </Switch>
      </main>
    </div>
    );
  }
}
