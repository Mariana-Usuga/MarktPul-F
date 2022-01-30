import { LOGIN, LOGOUT } from '../types/authTypes';

const getCurrentLocalStorage = (item) => {
  try {
    const localItem = JSON.parse(localStorage.getItem(`${item}`)) ?? '';
    return localItem;
  } catch {
    return '';
  }
};

const initialState = {
  token: getCurrentLocalStorage('token'),
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.payload,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
