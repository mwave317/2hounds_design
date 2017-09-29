export function addToCart(newitemsBeingPurchased) {
  return {
    type: 'ADD ITEMS TO THE CART',
    payload: newitemsBeingPurchased,
  };
}
