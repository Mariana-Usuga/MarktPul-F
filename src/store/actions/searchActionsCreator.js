import { LOAD_MARKETS_FILTER } from '../types/SearchTypes';
import getMarketFilter from '../services/SearchServices';

export const loadMarketsFilter = (markets) => ({
  type: LOAD_MARKETS_FILTER,
  payload: markets,
});
export const fetchMarketFilter = (markets, search) => (dispatch) => {
  const marketFilter = getMarketFilter(markets, search);
  dispatch(loadMarketsFilter(marketFilter));
};
