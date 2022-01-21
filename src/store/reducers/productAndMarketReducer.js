import {
  CREATE_PRODUCT,
  CREATE_MARKET,
  LOAD_PRODUCTS,
  LOAD_MARKETS,
} from '../types/productAndMarketTypes';

const initialState = {
  markets: [],
  products: [],
  product: {},
  market: {},
};

const productAndMarketReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, products: action.payload };
    case LOAD_MARKETS:
      return { ...state, markets: action.payload };
    case CREATE_PRODUCT:
      return { ...state, product: action.payload };
    case CREATE_MARKET:
      return { ...state, market: action.payload };
    default:
      return state;
  }
};

export default productAndMarketReducer;
