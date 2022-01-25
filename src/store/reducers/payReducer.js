import { PAY, SHOW_LOADER, HIDE_LOADER } from '../types/payTypes';

const initialState = {
  dataPay: {},
  isLoading: false,
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY:
      return { ...state, dataPay: action.payload };
    case SHOW_LOADER:
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default landingPageReducer;
