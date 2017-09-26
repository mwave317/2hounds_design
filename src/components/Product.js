import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import items from '../products';
export default class Product extends Component {
  constructor(props) {
    super(props);

    console.log(this.state);
    console.log(this.props);
  }

  render() {
    // const item = this.state.items.name;
    return (
      <div>
        <ReactPlayer controls='true' url='https://www.youtube.com/watch?time_continue=2&v=FagQYmTE6AA'/>
         {/* <p>{item}</p> */}
        <form>
        <input type="text" placeholder="Enter your e-mail"/>
        <input type="button" value="Submit"/>
      </form>
      </div>
    );
  };
};
