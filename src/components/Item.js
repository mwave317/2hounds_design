import React, { Component } from 'react';
import ReactPlayer from 'react-player';
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    const product = this.state.items;
    return (
      <div>
        <ReactPlayer controls='true' url='https://www.youtube.com/watch?time_continue=2&v=FagQYmTE6AA'/>
        {/* <p>{product.name}</p> */}
        <form>
        <input type="text" placeholder="Enter your e-mail"/>
        <input type="button" value="Submit"/>
      </form>
      </div>
    );

  };
};
