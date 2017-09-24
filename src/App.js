import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import './styles/styles.css';
import Review from './components/Review';
import Navbar from './components/Navbar';
import Item from './components/Item';

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
      <h1>2 Hounds Design</h1>
  <Item/>
    </main>
      </div>
    );
  }
}

export default withRouter(App);
