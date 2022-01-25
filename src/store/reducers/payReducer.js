import { PAY } from '../types/payTypes';

const initialState = {
  dataPay: {},
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY:
      return { ...state, dataPay: action.payload };
    default:
      return state;
  }
};

export default landingPageReducer;
