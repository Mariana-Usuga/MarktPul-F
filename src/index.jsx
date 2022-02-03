/* eslint-disable import/no-self-import */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
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
import CreateProduct from './pages/CreateProduct/index';
import CreateMarket from './pages/CreateMarket/index';
import PaymentProcess from './components/PaymentProcess/index';
import ActivateAcount from './pages/ActivateAccount';
import configureStore from './store/index';
// import configureStore from './store/index';
import UpdateMarket from './pages/UpdateMarket/index';
import FetchProductsMyMarkets from './components/FetchProductsMyMarkets/index';
import ReportMarket from './pages/ReportMarket/index';

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
      <Route path="/cart" element={<Cart />} />
      <Route path="/activate/:hash" element={<ActivateAcount />} />
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
