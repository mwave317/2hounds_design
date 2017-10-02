import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import Products from './Products';
class Home extends Component {

  render() {

    return (
      <div>
        <section>
        <h2>Freedom No-pull Harness</h2>
        <p><strong>The Freedom Harness Makes Walking Fun!</strong> This harness features a
          patented control loop on the back of the harness, which tightens
          gently around your dog's chest to discourage pulling and makes walking
           your dog an easy, more enjoyable experience for both of you.</p>

        <p><strong>Keeps your dog safe!</strong> The Freedom no-pull Harness is
         made with stainless steel hardware and four adjustment points to ensure
          that it is more than strong enough to hold any size dog, from 14 lbs
           all the way up to 250+ lbs. The chest strap is lined with Swiss
            Velvet, which helps prevent rubbing and chaffing sores behind the
             legs and the straps are all turned out to prevent sores and raw
              spots along the seams.</p>
<div className="player">
<ReactPlayer controls = 'true' url='https://www.youtube.com/watch?time_continue=2&v=FagQYmTE6AA'/>
</div>
        <p><strong>Gives you better control!</strong> The Freedom Harness also
         features a structural ring on the front of the harness. Connecting to
          this ring is Optional but it does allow you to connect to the front
           and back of the harness simultaneously. The main connection on the
            back of the harness tightens gently around the chest to discourage
             pulling behavior, while the connection on the front of the harness
              allows you to redirect your dog's attention back to you for
               training and treats.</p>
      <p>The Optional Training Leash allows you to connect to the front and
         back of the harness simultaneously. Alternatively you can use the
          training leash to connect to the harness and a collar at the same
           time, providing additional control points.</p>

      <p>2 Hounds Design is the exclusive manufacturer of the Freedom Harness,
         which is (proudly!) Made in the USA!</p>
      </section>
      <Products/>
      </div>
    );

  };
};

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

export default connect(mapState2props, mapDispatch2props)(Home);
