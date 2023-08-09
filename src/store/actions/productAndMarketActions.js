import {
  LOAD_MARKETS,
  LOAD_PRODUCTS,
  CREATE_MARKET,
  CREATE_PRODUCT,
  GET_ID_PRODUCT,
  GET_ID_MARKET,
  UPDATE_MARKET,
  UPDATE_PRODUCT,
  GET_PRODUCT,
  SHOW_LOADER,
  HIDE_LOADER,
  DELETE_MARKET,
} from '../types/productAndMarketTypes';
import {
  getMarkets,
  getProducts,
  postMarket,
  postProduct,
  patchMarket,
  patchProduct,
  getProduct,
  patchUser,
  deletedMarket,
} from '../services/productAndMarketServices';

export const showLoader = () => ({
  type: SHOW_LOADER,
  payload: true,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
  payload: false,
});

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
export const deleteMarket = (market) => ({
  type: DELETE_MARKET,
  payload: market,
});
export const fetchUpdateMarket = (newMarket, id) => async (dispatch) => {
  const responseMarket = await patchMarket(newMarket, id);
  dispatch(updateMarket(responseMarket));
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

export const loadProduct = (product) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT,
    payload: product,
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

export const fetchProduct = (id) => () => {
  return getProduct(id);
};
export const fetchDeleteMarket = (id) => async (dispatch) => {
  const markets = await deletedMarket(id);
  dispatch(deleteMarket(markets));
};
export const sendProduct = (formProduct) => async (dispatch) => {
  const responseProduct = await postProduct(formProduct);
  dispatch(createProduct(responseProduct));
};

export const sendMarket = (formMarket, marketArray, id) => async (dispatch) => {
  const responseMarket = await postMarket(formMarket);
  marketArray.push(responseMarket._id);
  patchUser(marketArray, id);
  dispatch(createMarket(responseMarket));
};
