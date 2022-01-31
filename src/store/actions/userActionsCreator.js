import { LOAD_USER } from '../types/userTypes';
import { getUser } from '../services/landingPageServices';

export const loadUser = (user) => ({
  type: LOAD_USER,
  payload: user.data,
});
export const fetchUser = (token) => async (dispatch) => {
  const user = await getUser(token);
  // localStorage.setItem('user', JSON.stringify(user.data));
  dispatch(loadUser(user));
};
