import { LOAD_USER } from '../types/userTypes';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
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
