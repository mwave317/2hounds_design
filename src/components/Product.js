import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import harnessLarge from '../img/lolaforwebsite2.jpg';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      color: '',
      training_leash: 0,
      quantity: 0,
      itemsBeingPurchased: [{ size: '', color: '', training_leash: 0, quantity: 0, },],
    };
  }

  buyMe () {
    const newItem = {
      size: this.state.size,
      color: this.state.color,
      training_leash: this.state.training_leash,
      quantity: this.state.quantity,
    };

    this.props.beingSold(newItem);
}
//Move this to redux, setState can not be used in redux so
//add the items being purchased and concat it inside the function located in the Dispatch to Props

  //   this.setState({
  //       itemsBeingPurchased: this.state.itemsBeingPurchased.concat(buyMe([newItem],
  //     )});
  // }
  render() {

    const sizing = this.props.products.items[0].size.map(size => <option value={size}>{size}</option>);
    const color = this.props.products.items[0].sizeSku.map(sizeSku => <option value={sizeSku.color}>{sizeSku.color}</option>);
    const trainingLeash = this.props.products.items[0].training_leash.map(training => <option value={training.dollar_amount}>{training.option}</option>);
    const sellingPoints = this.props.products.items[0].selling_points.map(selling => <p>{selling}</p>);



    return (
      <div>
        <ReactPlayer controls = 'true' url='https://www.youtube.com/watch?time_continue=2&v=FagQYmTE6AA'/>
        <img alt="dog wearing as harness" src= {harnessLarge}/>
        {sellingPoints}
        <select onChange={(event => this.setState({ size: event.target.value }))}>{sizing}</select>
        <select onChange={(event => this.setState({ color: event.target.value }))}>{color}</select>
        <select onChange={(event => this.setState({ training_leash: event.target.value }))}>{trainingLeash}</select>
        <input type="number" value={this.state.quantity} onChange={(event => this.setState({ quantity: event.target.value }))}></input>
        <button onClick={() => this.buyMe()}>Add to Cart</button>
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

export function mapDispatch2props(dispatch) {
  // let newitemsBeingPurchased = [];

  return {
    // This is a function who's job is to add new items to the cart.
    beingSold: function (item) {  //newItem which was passed to the beingSold function call
      dispatch(addToCart(item)); //dispatch is the call for the action creator called addToCart in the actions file. Item is the information that was passed from newItem in the beingsold function.
    },
  };
};

export default connect(mapState2props, mapDispatch2props)(Product);
