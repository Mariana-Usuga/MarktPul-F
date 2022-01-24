import { LOGIN, LOGOUT } from '../types/authTypes';

const initialState = {
  token: JSON.parse(localStorage.getItem('token')) || '',
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
