import { LOGIN /* , LOGOUT  */ } from '../types/authTypes';
import { postLogin } from '../services/LoginPageServices';

export const loginUser = (token) => ({
  type: LOGIN,
  payload: token,
});
export const fetchLogin = (email, password) => async (dispatch) => {
  const token = await postLogin(email, password);
  if (token.JWT) {
    localStorage.setItem('token', JSON.stringify(token.JWT));
    dispatch(loginUser(token));
  }
  console.log(token);
};
