import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productAndMarketReducer from './reducers/productAndMarketReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import payReducer from './reducers/payReducer';
import changeAddress from './reducers/changeAddressReducer';

const storeCombined = combineReducers({
  auth: authReducer,
  user: userReducer,
  productAndMarket: productAndMarketReducer,
  pay: payReducer,
  changeAddress,
  cartReducer,
});

const store = createStore(
  storeCombined,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
