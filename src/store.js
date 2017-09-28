import { createStore } from 'redux';
import products from './products';

export function reducer(state, action) {

  return state;
}

export const store = createStore(reducer, {
  products: products,
});
