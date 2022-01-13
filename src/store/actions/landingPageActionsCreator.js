import { LOAD_MARKETS, LOAD_PRODUCTS } from '../types/landingPageTypes';
import { getMarkets, getProducts } from '../../utils/landingPageServices';

export const loadMarkets = (markets) => ({
  type: LOAD_MARKETS,
  payload: markets.data,
});

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products.data,
});

export const fetchMarkets = () => (dispatch) => {
  getMarkets().then((marketsData) => {
    dispatch(loadMarkets(marketsData));
  });
};

export const fetchProducts = () => (dispatch) => {
  getProducts().then((products) => {
    dispatch(loadProducts(products));
  });
};
