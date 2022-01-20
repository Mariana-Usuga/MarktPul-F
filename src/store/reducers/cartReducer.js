/* eslint-disable prettier/prettier */
import { LOAD_CART, ADD_TO_CART, UPDATE_CART } from '../types/cartTypes';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cartProduct')) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART:
      return { ...state, cart: action.payload };
    case ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const cart = [...state.cart, action.payload];
      return {
        ...state,
        cart,
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map((product) => (product._id === action.payload
          ? {
            ...product,
            qty: product.qty + 1,
          }
          : product)),
      };
    default:
      return state;
  }
};

export default cartReducer;
