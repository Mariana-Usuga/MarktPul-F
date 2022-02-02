import { LOAD_USER } from '../types/userTypes';
import { getCurrentLocalStorage } from '../utils/LocalStorageUtils';

const initialState = {
  user: getCurrentLocalStorage('user') || {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
