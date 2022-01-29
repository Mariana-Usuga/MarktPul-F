import { LOGIN, LOGOUT } from '../types/authTypes';
import { getCurrentLocalStorage } from '../utils/LocalStorageUtils';

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
