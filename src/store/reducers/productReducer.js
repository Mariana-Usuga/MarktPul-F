import { CREATE_PRODUCT, CREATE_MARKET } from '../types/productTypes';

const initialState = {
  product: {},
  market: {},
};

export const productReducer = (state = initialState, action) => {
  console.log('esta en reducer', action.payload);
  switch (action.type) {
    case CREATE_PRODUCT:
      return { ...state, product: action.payload };
    case CREATE_MARKET:
      return { ...state, market: action.payload };
    default:
      return state;
  }
};

export default productReducer;

// export const marketReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_MARKET:
//       return { ...state, market: action.payload };
//     default:
//       return state;
//   }
// };

// export default {
//   productReducer,
//   marketReducer,
// };
