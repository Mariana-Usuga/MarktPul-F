import {
  CREATE_PRODUCT,
  CREATE_MARKET,
  LOAD_PRODUCTS,
  LOAD_MARKETS,
  GET_ID_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_MARKET,
  MARKET_PRODUCTS,
} from '../types/productAndMarketTypes';

const initialState = {
  markets: [],
  products: [],
  idProduct: '',
  idMarket: '',
  marketProducts: [],
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
    case GET_ID_PRODUCT:
      return { ...state, idProduct: action.payload };
    case UPDATE_PRODUCT:
      return { ...state, idProduct: action.payload };
    case UPDATE_MARKET:
      return { ...state, idProduct: action.payload };
    case MARKET_PRODUCTS:
      return { ...state, marketProducts: action.payload };
    default:
      return state;
  }
};

export default productAndMarketReducer;
