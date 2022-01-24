import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import landingPageReducer from './reducers/landingPageReducer';
import authReducer from './reducers/authReducer';

// eslint-disable-next-line no-unused-vars
const storeCombined = combineReducers({
  landing: landingPageReducer,
  auth: authReducer,
});
const store = createStore(
  storeCombined,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
