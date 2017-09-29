import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {

  render() {

    let cartItems = this.props.itemsBeingPurchased.map(item => <p>{item.size} {item.color} {item.training_leash} {item.quantity}</p>);
    console.log(this.props.itemsBeingPurchased);
    return (
      <div>
        {cartItems}
      </div>

    );
  };
};

export function mapState2props(state) {
  return {
    products: state.products,
    itemsBeingPurchased: state.itemsBeingPurchased,
  };
}

export function mapDispatch2props() {

};

export default connect(mapState2props)(Cart);
