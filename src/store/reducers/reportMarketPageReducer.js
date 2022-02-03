import { LOAD_MARKETS_USERBY } from '../types/reportMarketPage';

const initialState = {
  marketsUser: [],
};
const reportMarket = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARKETS_USERBY:
      return {
        marketsUser: action.payload,
      };
    default:
      return state;
  }
};

export default reportMarket;
