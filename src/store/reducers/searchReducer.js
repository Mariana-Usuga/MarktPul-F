import { LOAD_MARKETS_FILTER } from '../types/SearchTypes';

const initialState = {
  markets_filter: [],
};
const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARKETS_FILTER:
      return { ...state, markets_filter: action.payload };
    default:
      return state;
  }
};
export default SearchReducer;
