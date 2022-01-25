import { PAY } from '../types/payTypes';
import { getMarkets } from '../services/landingPageServices';

export const loadMarkets = (markets) => ({
  type: PAY,
  payload: markets.data,
});

export const fetchMarkets = () => async (dispatch) => {
  const markets = await getMarkets();
  dispatch(loadMarkets(markets));
};


