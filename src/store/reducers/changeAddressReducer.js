import {
  ADDRESS,
  EXISTING_ADDRESS_FALSE,
  EXISTING_ADDRESS_TRUE,
} from '../types/changeAddressTypes';

const initialState = {
  location: {},
  existingAddress: 'nosee',
};

const chageAddress = (state = initialState, action) => {
  switch (action.type) {
    case ADDRESS:
      return { ...state, location: action.payload };
    case EXISTING_ADDRESS_TRUE:
    case EXISTING_ADDRESS_FALSE:
      return { ...state, existingAddress: action.payload };
    default:
      return state;
  }
};

export default chageAddress;
