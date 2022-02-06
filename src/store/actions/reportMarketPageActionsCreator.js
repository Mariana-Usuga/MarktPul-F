import { LOAD_MARKETS_USERBY } from '../types/reportMarketPage';
import { getMarketsByUser } from '../services/reportMarketPageServices';

export const loadMarketsUserBy = (markets) => ({
  type: LOAD_MARKETS_USERBY,
  payload: markets.data.marketId,
});
export const FetchMarketsUserBy = (token, id) => async (dispatch) => {
  const product = await getMarketsByUser(token, id);
  console.log(
    '🚀 ~ file: reportMarketPageActionsCreator.js ~ line 10 ~ FetchMarketsUserBy ~ product',
    product,
  );
  dispatch(loadMarketsUserBy(product));
};
