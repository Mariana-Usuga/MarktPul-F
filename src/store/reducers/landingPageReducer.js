import {
  LOAD_MARKETS,
  LOAD_PRODUCTS,
  PRODUCT,
} from '../types/landingPageTypes';

const initialState = {
  markets: [],
  products: [],
  product: {},
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARKETS:
      return { ...state, markets: action.payload };
    case LOAD_PRODUCTS:
      return { ...state, products: action.payload };
    case PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export default landingPageReducer;
