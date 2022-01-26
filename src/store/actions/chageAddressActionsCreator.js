import { ADDRESS } from '../types/chageAddressTypes';
import { postChangeAddress } from '../services/chageAddressServices';

export const loginUser = (update) => ({
  type: ADDRESS,
  payload: update.data,
});

export const fetchAddress = (form, id) => async (dispatch) => {
  const update = await postChangeAddress(form, id);
  dispatch(loginUser(update));
};
