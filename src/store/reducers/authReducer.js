import { LOGIN, LOGOUT } from '../types/authTypes';

const initialState = {
  user: {},
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
