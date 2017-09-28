import React, { Component } from 'react';
import RotatingBanner from '../img/RotatingBannerNewsletter2a-2.png';
export default class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: '',
      first_name: '',
      last_name: '',
    };

  }

  joinNewsletter(event) {
//Add logic to submit the form to the thank you for subscribing page.

    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <figure>
          <img alt='rotating banner' src={RotatingBanner}></img>
        </figure>
        <article>
      <p>Please take a moment to subscribe to our Montly Newsletter</p>

      <p>Subscribers receive monthly or bi-monthly newsletters from 2 Hounds
         Design announcing new collar designs, discounts, special sales,
          Hope for Hounds collars and news. <strong> Receive 10% off your next order
           when you sign up and confirm your subscription to our mailing list.</strong></p>
  </article>
      <form>
      <p>* Only the email email field is required.</p>
      <input type="text" placeholder="Email Address" value={this.state.email_address} onChange={event => this.setState({email_address: event.target.value})} />
      <input type="text" placeholder="First Name" value={this.state.first_name} onChange={event => this.setState({first_name: event.target.value})} />
      <input type="text" placeholder="Last Name" value={this.state.last_name} onChange={event => this.setState({last_name: event.target.value})} />
      {/* <input type="button" value="Suscribe" onClick={(event) => this.joinNewsletter(event)} value={this.state.first_name, this.state.email_address, this.state.last_name}>Suscribe</input> */}
    </form>

    </div>
    );

  };
};
