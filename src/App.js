import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import './styles/styles.css';
import Review from './components/Review';
import Navbar from './components/Navbar';
import Item from './components/Item';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Harness from './components/Harness';
import Account from './components/Account';
import Cart from './components/Cart';
import Newsletter from './components/Newsletter';
class App extends Component {

  render() {
    return (
      <div className="App">
      <header>
        <nav>
          <Navbar/>
      </nav>
    </header>
    <main>
      <Switch>
      <Route exact path="/" component={Item} />
      <Route path="/aboutus" component={About} />
      <Route path="/contactus" component={Contact} />
      <Route path="/harness_fit" component={Harness} />
      <Route path="/account" component={Account} />
      <Route path="/cart" component={Cart} />
      <Route path="/newsletter" component={Newsletter} />
    </Switch>
    </main>
  <footer>
    <Footer/>
  </footer>
      </div>
    );
  }
}

export default withRouter(App);
