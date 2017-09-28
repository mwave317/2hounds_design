import React, { Component, Dropdown } from 'react';
import ReactPlayer from 'react-player';

import { connect } from 'react-redux';

class Product extends Component {

  render() {
    
    const sizing = this.props.products.items[0].size.map(size => <option value={size}>{size}</option>);
    const color = this.props.products.items[0].sizeSku.map(sizeSku => <option value={sizeSku.color}>{sizeSku.color}</option>);
        const trainingLeash = this.props.products.items[0].training_leash.map(training => <option value={training.dollar_amount}>{training.option}</option>);
        const sellingPoints = this.props.products.items[0].selling_points.map(selling => <p>{selling}</p>);
    return (
      <div>
        <ReactPlayer controls='true' url='https://www.youtube.com/watch?time_continue=2&v=FagQYmTE6AA'/>
        {sellingPoints}
        <select>{sizing}</select>
        <select>{color}</select>
        <select>{trainingLeash}</select>
        <input type="number" placeholder="Quanity"></input>
        <button>Add To Cart</button>
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

export default connect(mapState2props)(Product);
