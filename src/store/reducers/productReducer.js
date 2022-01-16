import { CREATE_PRODUCT } from '../types/productTypes';

const initialState = {
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export default productReducer;
