import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import landingPageReducer from './reducers/landingPageReducer';

const store = createStore(
  landingPageReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
