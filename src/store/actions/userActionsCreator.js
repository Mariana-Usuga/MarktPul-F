import { LOAD_USER, UPDATE_USER } from '../types/userTypes';
import { getUser, patchUser } from '../services/productAndMarketServices';

export const loadUser = (user) => ({
  type: LOAD_USER,
  payload: user.data,
});
export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user.data,
});
export const fetchUser = (token) => async (dispatch) => {
  const user = await getUser(token);
  // localStorage.setItem('user', JSON.stringify(user.data));
  dispatch(loadUser(user));
};
export const fetchUpdateUser = (user) => async (dispatch) => {
  const userUpdate = await patchUser(user);
  dispatch(updateUser(userUpdate));
};
