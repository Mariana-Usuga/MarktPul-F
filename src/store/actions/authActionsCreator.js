import { LOGIN, LOGOUT } from '../types/authTypes';
import { postLogin } from '../services/LoginPageServices';

export const loginUser = (token) => ({
  type: LOGIN,
  payload: token,
});

export const logoutUser = () => ({
  type: LOGOUT,
  payload: null,
});

export const fetchLogin = (email, password) => async (dispatch) => {
  const token = await postLogin(email, password);
  if (token.JWT) {
    localStorage.setItem('token', JSON.stringify(token.JWT));
    dispatch(loginUser(token));
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  dispatch(logoutUser());
};
