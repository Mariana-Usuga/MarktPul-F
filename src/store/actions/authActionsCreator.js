import { LOGIN /* , LOGOUT  */ } from '../types/authTypes';
import { postLogin } from '../services/LoginPageServices';

export const loginUser = (token) => ({
  type: LOGIN,
  payload: token.data,
});

export const fetchLogin = (email, password) => async (dispatch) => {
  const token = await postLogin(email, password);
  localStorage.setItem('token', JSON.stringify(token.data.JWT));
  dispatch(loginUser(token));
};
