import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import landingPageReducer from './reducers/landingPageReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import payReducer from './reducers/payReducer';
import changeAddress from './reducers/changeAddressReducer';
import reportMarket from './reducers/reportMarketPageReducer';

const storeCombined = combineReducers({
  landing: landingPageReducer,
  auth: authReducer,
  user: userReducer,
  pay: payReducer,
  changeAddress,
  cartReducer,
  report: reportMarket,
});

const store = createStore(
  storeCombined,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
