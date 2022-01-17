import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import landingPageReducer from './reducers/landingPageReducer';
import cartReducer from './reducers/cartReducer';

const storeCombined = combineReducers({
  landingPageReducer,
  cartReducer,
});
const store = createStore(
  storeCombined,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
