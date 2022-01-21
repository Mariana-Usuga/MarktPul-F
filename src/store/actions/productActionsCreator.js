import { CREATE_PRODUCT, CREATE_MARKET } from '../types/productTypes';
import { postProduct, postMarket } from '../../utils/productServices';

export const createProduct = (product) => ({
  type: CREATE_PRODUCT,
  payload: product,
});

export const createMarket = (market) => ({
  type: CREATE_MARKET,
  payload: market,
});

export const sendProduct = (formProduct) => async (dispatch) => {
  const responseProduct = await postProduct(formProduct);
  dispatch(createProduct(responseProduct));
};

export const sendMarket = (formMarket) => async (dispatch) => {
  const responseMarket = await postMarket(formMarket);
  console.log('esta en send Marker', responseMarket);
  dispatch(createMarket(responseMarket));
};
