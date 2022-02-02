import {
  LOAD_MARKETS,
  LOAD_PRODUCTS,
  CREATE_MARKET,
  CREATE_PRODUCT,
  GET_ID_PRODUCT,
  GET_ID_MARKET,
  UPDATE_MARKET,
  UPDATE_PRODUCT,
} from '../types/productAndMarketTypes';
import {
  getMarkets,
  getProducts,
  postMarket,
  postProduct,
  patchMarket,
  patchProduct,
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

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const updateMarket = (product) => ({
  type: UPDATE_MARKET,
  payload: product,
});

export const fetchUpdateMarket = (market) => async (dispatch) => {
  const updateMarket = await patchMarket(market);
  dispatch(updateMarket(updateMarket));
};

export const fetchUpdateProduct = (product) => async (dispatch) => {
  const updateProduct = await patchProduct(product);
  dispatch(updateProduct(updateProduct));
};

export const fetchIdProduct = (id) => async (dispatch) => {
  dispatch({
    type: GET_ID_PRODUCT,
    payload: id,
  });
};

export const fetchIdMarket = (id) => async (dispatch) => {
  dispatch({
    type: GET_ID_MARKET,
    payload: id,
  });
};

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
