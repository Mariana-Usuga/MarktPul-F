/* eslint-disable import/no-self-import */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LandingPage from './pages/LandingPage';
import MarketDetail from './pages/MarketDetail';
import ItemDetail from './pages/ItemDetail';
import Search from './pages/Search';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import CreateProduct from './pages/CreateProduct';
import CreateMarket from './pages/CreateMarket';
import PaymentProcess from './components/PaymentProcess';
import ActivateAcount from './pages/ActivateAccount';
import configureStore from './store';
import UpdateMarket from './pages/UpdateMarket';
import FetchProductsMyMarkets from './components/FetchProductsMyMarkets';
import ResetPassword from './pages/ResetPassword';
import ReportMarket from './pages/ReportMarket';
import User from './pages/User';

import './index.scss';

const { store, persistor } = configureStore();

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="pages" element={<Layout />}>
        <Route path="search" element={<Search />} />
        <Route path="marketDetail/:id" element={<MarketDetail />} />
        <Route path="itemDetail/:id" element={<ItemDetail />} />
        <Route path="createProduct" element={<CreateProduct />} />
        <Route path="createMarket" element={<CreateMarket />} />
        <Route path="paymentProcess" element={<PaymentProcess />} />
        <Route path="paymentProcess/:id" element={<PaymentProcess />} />
        <Route path="updateMarket/:id" element={<UpdateMarket />} />
        <Route
          path="productsMyMarkets/:id"
          element={<FetchProductsMyMarkets />}
        />
        <Route path="marketReport" element={<ReportMarket />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="" element={<Layout />}>
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/user" element={<User />} />
      <Route path="/activate/:hash" element={<ActivateAcount />} />
      <Route path="/resetPass/:hash" element={<ResetPassword />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routing />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
