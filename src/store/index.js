import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productAndMarketReducer from './reducers/productAndMarketReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import payReducer from './reducers/payReducer';
import changeAddress from './reducers/changeAddressReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const storeCombined = combineReducers({
  auth: authReducer,
  user: userReducer,
  productAndMarket: productAndMarketReducer,
  pay: payReducer,
  changeAddress,
  cartReducer,
});

const persistedReducer = persistReducer(persistConfig, storeCombined);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
