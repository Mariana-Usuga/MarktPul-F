import {
  LOADING,
  NOTLOADING,
  LOAD_CART,
  ADD_TO_CART,
  ADD_ONE_CART,
  REMOVE_ONE_CART,
  DELETE_FROM_CART,
} from '../types/cartTypes';
import { getCart, getProduct } from '../../pages/Cart/cartServices';

export const loading = () => ({
  type: LOADING,
  payload: true,
});
export const finishLoading = () => ({
  type: NOTLOADING,
  payload: false,
});

export const loadCart = (cart) => ({
  type: LOAD_CART,
  payload: cart,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const deleteFromCart = (productId) => ({
  type: DELETE_FROM_CART,
  payload: productId,
});

export const updateCurrentAddQty = (product) => ({
  type: ADD_ONE_CART,
  payload: product,
});
export const updateCurrentRemoveQty = (product) => ({
  type: REMOVE_ONE_CART,
  payload: product,
});

export const fetchCart = () => async (dispatch) => {
  dispatch(loading());
  try {
    const cart = await getCart();
    dispatch(loadCart(cart));
  } finally {
    dispatch(finishLoading());
  }
};
export const addProductToCart = (product) => async (dispatch) => {
  const products = await getProduct(product);
  const producto = { ...products.data, qty: 1 };
  dispatch(addToCart(producto));
};

export const addQtyProductToCart = (product) => async (dispatch) => {
  dispatch(updateCurrentAddQty(product._id));
};

export const removeQtyProductToCart = (product) => async (dispatch) => {
  dispatch(updateCurrentRemoveQty(product._id));
};
export const deleteProductFromCart = (productId) => async (dispatch) => {
  dispatch(deleteFromCart(productId));
};
