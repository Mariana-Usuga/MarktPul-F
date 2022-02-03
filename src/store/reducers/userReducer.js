import {
  LOAD_USER,
  UPDATE_USER_SUCESSFUL,
  UPDATE_USER_FAILURE,
  UPLOAD_USER_PICTURE,
} from '../types/userTypes';
import { getCurrentLocalStorage } from '../utils/LocalStorageUtils';

const initialState = {
  user: getCurrentLocalStorage('user') || {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUCESSFUL:
    case LOAD_USER:
      return {
        user: action.payload,
      };
    case UPDATE_USER_FAILURE:
      return {
        user: state.user,
      };
    case UPLOAD_USER_PICTURE:
      return {
        user: { ...state.user, picture: action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
