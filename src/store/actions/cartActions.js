import { LOAD_CART, ADD_TO_CART, UPDATE_CART } from '../types/cartTypes';
import { getCart, getProduct } from '../../utils/cartServices';

export const loadCart = (cart) => ({
  type: LOAD_CART,
  payload: cart,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const updateCurrent = (product) => ({
  type: UPDATE_CART,
  payload: product,
});

export const fetchCart = () => async (dispatch) => {
  const cart = await getCart();
  dispatch(loadCart(cart));
};
export const addProductToCart = (product) => async (dispatch) => {
  const products = await getProduct(product);
  const producto = { ...products.data, qty: 1 };
  dispatch(addToCart(producto));
};

export const updateProductToCart = (product) => async (dispatch) => {
  dispatch(updateCurrent(product._id));
};
