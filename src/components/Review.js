import React, { Component } from 'react';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      <form>
      <input type="text" placeholder="Enter your Name"/>
      <input type="text" placeholder="Enter your email address"/>
      <input type="text" placeholder="Your comments"/>
      <textarea cols="52" rows="7" placeholder="Advantages has a max lenght of 5000 characters"
       maxLength="5000"/>
       <textarea cols="52" rows="7" placeholder="Disadvantages has a max lenght of 5000 characters"
        maxLength="5000"/>
      <input type = "button" value="submit"/>
    </form>
    </div>
    );
  };
}
