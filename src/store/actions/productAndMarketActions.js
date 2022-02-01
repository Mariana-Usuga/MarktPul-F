import {
  LOAD_MARKETS,
  LOAD_PRODUCTS,
  CREATE_MARKET,
  CREATE_PRODUCT,
  PRODUCT,
} from '../types/productAndMarketTypes';
import {
  getMarkets,
  getProducts,
  postMarket,
  postProduct,
  getProduct,
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

export const sendProduct = (formProduct) => async (dispatch) => {
  const responseProduct = await postProduct(formProduct);
  dispatch(createProduct(responseProduct));
};

export const sendMarket = (formMarket) => async (dispatch) => {
  const responseMarket = await postMarket(formMarket);
  dispatch(createMarket(responseMarket));
};

export const fetchAproduct = (id) => async (dispatch) => {
  const product = await getProduct(id);
  dispatch(loadAproduct(product));
};
