import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
// import { marketReducer } from './reducers/productReducer';

// import landingPageReducer from './reducers/landingPageReducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// console.log('store', store.getState());

export default store;
