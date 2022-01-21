import {
  LOAD_MARKETS,
  LOAD_PRODUCTS,
  CREATE_MARKET,
  CREATE_PRODUCT,
} from '../types/productAndMarketTypes';
import {
  getMarkets,
  getProducts,
  postMarket,
  postProduct,
} from '../services/productAndMarketServices';

export const loadMarkets = (markets) => ({
  type: LOAD_MARKETS,
  payload: markets.data,
});

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products.data,
});

export const createProduct = (product) => ({
  type: CREATE_PRODUCT,
  payload: product,
});

export const createMarket = (market) => ({
  type: CREATE_MARKET,
  payload: market,
});

export const fetchMarkets = () => async (dispatch) => {
  console.log('entra en fetch');
  const markets = await getMarkets();
  console.log('response', markets);
  dispatch(loadMarkets(markets));
};

export const fetchProducts = () => async (dispatch) => {
  const products = await getProducts();
  dispatch(loadProducts(products));
};

export const sendProduct = (formProduct) => async (dispatch) => {
  const responseProduct = await postProduct(formProduct);
  dispatch(createProduct(responseProduct));
};

export const sendMarket = (formMarket) => async (dispatch) => {
  const responseMarket = await postMarket(formMarket);
  dispatch(createMarket(responseMarket));
};
