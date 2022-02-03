import {
  LOAD_USER,
  UPDATE_USER_SUCESSFUL,
  UPDATE_USER_FAILURE,
} from '../types/userTypes';
import { getUser } from '../services/landingPageServices';
import { patchUser } from '../services/UserPageServices';

export const loadUser = (user) => ({
  type: LOAD_USER,
  payload: user.data,
});

export const updateUserSucess = (user) => ({
  type: UPDATE_USER_SUCESSFUL,
  payload: user.data,
});

export const updateUserFailure = () => ({
  type: UPDATE_USER_FAILURE,
  payload: null,
});

export const fetchUser = (token) => async (dispatch) => {
  const user = await getUser(token);
  // localStorage.setItem('user', JSON.stringify(user.data));
  dispatch(loadUser(user));
};

export const fetchUpdateUser = (data, id, token) => async (dispatch) => {
  const user = await patchUser(data, id, token);
  if (user?._id) {
    dispatch(updateUserSucess(user));
  }
  dispatch(updateUserFailure());
};
