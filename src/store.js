import { createStore } from 'redux';
import products from './products';

export function reducer(state, action) {
  if (action.type === 'ADD ITEMS TO THE CART') {
    return {
      itemsBeingPurchased: state.itemsBeingPurchased.concat([action.payload]),
      products: products,
    };
    console.log('Did this work');
  }

  return state;
}

export const store = createStore(reducer, {
  products: products,
  itemsBeingPurchased: [],
});
