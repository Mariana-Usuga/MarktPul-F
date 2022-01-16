import { CREATE_PRODUCT } from '../types/productTypes';
import { postProduct } from '../../utils/productServices';

export const createProduct = (product) => ({
  type: CREATE_PRODUCT,
  payload: product.data,
});

export const sendProduct = (formProduct) => async (dispatch) => {
  await postProduct(formProduct);
  dispatch(createProduct(formProduct));
};
