import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productAndMarketReducer from './reducers/productAndMarketReducer';

const store = createStore(
  productAndMarketReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
