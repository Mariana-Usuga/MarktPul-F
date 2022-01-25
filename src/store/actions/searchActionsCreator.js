import { LOAD_MARKETS_FILTER } from '../types/SearchTypes';
import getMarketFilter from '../services/SearchServices';

export const loadMarketsFilter = (markets) => ({
  type: LOAD_MARKETS_FILTER,
  payload: markets,
});
export const fetchMarketFilter = (markets, search) => async (dispatch) => {
  const marketFilter = await getMarketFilter(markets, search);
  dispatch(loadMarketsFilter(marketFilter));
};
