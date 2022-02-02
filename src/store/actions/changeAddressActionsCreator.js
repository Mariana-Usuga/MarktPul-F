import {
  ADDRESS,
  EXISTING_ADDRESS_TRUE,
  EXISTING_ADDRESS_FALSE,
} from '../types/changeAddressTypes';
import { postChangeAddress } from '../services/changeAddressServices';

export const changeAddress = (update) => ({
  type: ADDRESS,
  payload: update.data,
});

export const fetchAddress = (form, id, token) => async (dispatch) => {
  const update = await postChangeAddress(form, id, token);
  dispatch(changeAddress(update));
  return update;
};

export const existingAddressTrue = () => async (dispatch) => {
  dispatch({ type: EXISTING_ADDRESS_TRUE, payload: true });
};

export const existingAddressFalse = () => async (dispatch) => {
  dispatch({ type: EXISTING_ADDRESS_FALSE, payload: false });
};
