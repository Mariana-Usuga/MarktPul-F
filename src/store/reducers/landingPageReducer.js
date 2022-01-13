import { LOAD_MARKETS, LOAD_PRODUCTS } from '../types/landingPageTypes';

const initialState = {
  markets: [],
  products: [],
};

const landingPageReducer = (state = initialState, action) => {
  console.log('action payload', action.payload);
  switch (action.type) {
    case LOAD_MARKETS:
      return { ...state, markets: action.payload };
    case LOAD_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default landingPageReducer;
