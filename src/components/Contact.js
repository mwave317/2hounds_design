import React, { Component } from 'react';
export default class Contact extends Component {

  render() {
    return (
      <div>
        <p>This will be the updated Contact Form</p>

        <input type="text" placeholder="Enter your first name" onChange={()=> this.first_nane}></input>
        <input type="text" placeholder="Enter your last name" onChange={()=> this.last_nane}></input>
        <input type="text" placeholder="Enter your e-mail address" onChange={()=> this.state.email}></input>
        <textarea cols="60" rows="10" placeholder="Enter your questions or concerns"></textarea>
        <input type="text" placeholder="Enter the best contact number"></input>
        <input type ="submit" value="submit"></input>
      </div>
    );
  };
};
