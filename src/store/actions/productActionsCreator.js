import { CREATE_PRODUCT } from '../types/productTypes';
import { postProduct } from '../../utils/productServices';

export const createProduct = (product) => ({
  type: CREATE_PRODUCT,
  payload: product,
});

export const sendProduct = (formProduct) => async (dispatch) => {
  const responseProduct = await postProduct(formProduct);
  dispatch(createProduct(responseProduct));
};
