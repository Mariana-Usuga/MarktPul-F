/* eslint-disable import/named */
import {
  LOAD_MARKETS,
  LOAD_PRODUCTS,
  PRODUCT,
} from '../types/landingPageTypes';
import {
  getMarkets,
  getProducts,
  getProduct,
} from '../services/landingPageServices';

export const loadMarkets = (markets) => ({
  type: LOAD_MARKETS,
  payload: markets.data,
});

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products.data,
});

export const loadAproduct = (product) => ({
  type: PRODUCT,
  payload: product.data,
});

export const fetchMarkets = () => async (dispatch) => {
  const markets = await getMarkets();
  dispatch(loadMarkets(markets));
};

export const fetchProducts = () => async (dispatch) => {
  const products = await getProducts();
  dispatch(loadProducts(products));
};

export const fetchAproduct = (id) => async (dispatch) => {
  const product = await getProduct(id);
  dispatch(loadAproduct(product));
};
