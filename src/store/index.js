import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import landingPageReducer from './reducers/landingPageReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';

// eslint-disable-next-line no-unused-vars
const storeCombined = combineReducers({
  landing: landingPageReducer,
  auth: authReducer,
  user: userReducer,
  cartReducer,
});
const store = createStore(
  storeCombined,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
