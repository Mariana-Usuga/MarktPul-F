import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import productAndMarketReducer from './reducers/productAndMarketReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import SearchReducer from './reducers/searchReducer';
import payReducer from './reducers/payReducer';
import changeAddress from './reducers/changeAddressReducer';
import reportMarket from './reducers/reportMarketPageReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const storeCombined = combineReducers({
  auth: authReducer,
  user: userReducer,
  search: SearchReducer,
  productAndMarket: productAndMarketReducer,
  pay: payReducer,
  changeAddress,
  cartReducer,
  report: reportMarket,
});

// const persistedReducer = persistReducer(persistConfig, storeCombined);

const configureStore = () => {
  const store = createStore(
    storeCombined,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  // const persistor = persistStore(store);
  // return { store, persistor };
  return { store };
};

export default configureStore;
