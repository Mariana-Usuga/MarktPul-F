import {
  PAY,
  SHOW_LOADER,
  HIDE_LOADER,
  A_PRODUCT,
  BUY_CART,
} from '../types/payTypes';

const initialState = {
  dataPay: {},
  isLoading: false,
  aProduct: false,
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY:
      return { ...state, dataPay: action.payload };
    case SHOW_LOADER:
    case HIDE_LOADER:
      return { ...state, isLoading: action.payload };
    case A_PRODUCT:
    case BUY_CART:
      return { ...state, aProduct: action.payload };
    default:
      return state;
  }
};

export default landingPageReducer;
