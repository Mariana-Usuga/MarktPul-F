import {
  LOAD_MARKETS_FILTER,
  LOAD_PRODUCTS_FILTER,
  LOAD_SEARCH_QUERY,
} from '../types/SearchTypes';

const initialState = {
  markets_filter: [],
  products_filter: [],
  search: [],
};
const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARKETS_FILTER:
      return { ...state, markets_filter: action.payload };
    case LOAD_PRODUCTS_FILTER:
      return { ...state, products_filter: action.payload };
    case LOAD_SEARCH_QUERY:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
export default SearchReducer;
