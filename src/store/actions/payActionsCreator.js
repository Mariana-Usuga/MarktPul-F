import { PAY, SHOW_LOADER, HIDE_LOADER } from '../types/payTypes';
import { postPay } from '../services/payServices';

export const doPay = (pay) => ({
  type: PAY,
  payload: pay.data,
});

export const showLoader = () => ({
  type: SHOW_LOADER,
  payload: true,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
  payload: false,
});

export const fetchDoPay = (paymentData, token) => async (dispatch) => {
  const pay = await postPay(paymentData, token);
  dispatch(doPay(pay));
  return pay;
};
