import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/styles.css';
import logo from './favicon.ico';
import Home from './components/Home';
import Review from './components/Review';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import BeforeYouOrder from './components/BeforeYouOrder';
import Account from './components/Account';
import Cart from './components/Cart';
import Newsletter from './components/Newsletter';
import Terms from './components/Terms';
import Products from './components/Products';
import Faq from './components/Faq';
import Measure from './components/Measure';
import Anatomy from './components/Anatomy';
import Product from './components/Product';

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
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/beforeyouorder" component={BeforeYouOrder} />
      <Route path="/account" component={Account} />
      <Route path="/cart" component={Cart} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/terms" component={Terms} />
      <Route path="/faq" component={Faq} />
      <Route path="/product" component={Product} />
      <Route path="/measure" component={Measure} />
      <Route path="/anatomy" component={Anatomy} />
      <Route path="/review" component={Review} />
    </Switch>
    </main>
    <div>
    </div>
  <footer>
    <div className="footer">
    <Footer/>
  </div>
  </footer>
      </div>
    );
  }
}
export function mapState2props(state) {
  return {
    products: state.products,
  };
}

export function mapDispatch2props(dispatch) {
  return {
    products: function () {
      console.log(this.state.products);
    },
  };
};

export default withRouter(connect(mapState2props, mapDispatch2props)(App));
