import { PAY } from '../types/payTypes';
import { getMarkets } from '../services/landingPageServices';

export const doPay = (markets) => ({
  type: PAY,
  payload: markets.data,
});

export const fetchdoPay = () => async (dispatch) => {
  const markets = await getMarkets();
  dispatch(doPay(markets));
};
