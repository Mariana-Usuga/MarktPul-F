import { LOAD_MARKETS, LOAD_PRODUCTS } from '../types/landingPageTypes';

const initialState = {
  markets: { items: [], loaded: false },
  products: { items: [], loaded: false },
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARKETS:
      return { ...state, markets: { items: action.payload, loaded: true } };
    case LOAD_PRODUCTS:
      return { ...state, products: { items: action.payload, loaded: true } };
    default:
      return state;
  }
};

export default landingPageReducer;
