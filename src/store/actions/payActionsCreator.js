import {
  PAY,
  SHOW_LOADER,
  HIDE_LOADER,
  A_PRODUCT,
  BUY_CART,
} from '../types/payTypes';
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

export const fetchDoPay = (paymentData) => async (dispatch) => {
  const pay = await postPay(paymentData);
  dispatch(doPay(pay));
  return pay;
};

export const fetchAPay = () => async (dispatch) => {
  dispatch({ type: A_PRODUCT, payload: true });
};

export const fetchBuyCart = () => async (dispatch) => {
  dispatch({ type: BUY_CART, payload: false });
};
