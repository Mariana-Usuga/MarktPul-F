import { LOAD_MARKETS, LOAD_PRODUCTS } from '../types/landingPageTypes';
import { getMarkets, getProducts } from '../services/landingPageServices';

export const loadMarkets = (markets) => ({
  type: LOAD_MARKETS,
  payload: markets.data,
});

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products.data,
});

export const fetchMarkets = () => async (dispatch) => {
  const markets = await getMarkets();
  dispatch(loadMarkets(markets));
};

export const fetchProducts = () => async (dispatch) => {
  const products = await getProducts();
  dispatch(loadProducts(products));
};
