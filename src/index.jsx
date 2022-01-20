import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './pages/LandingPage';
import MarketDetail from './pages/MarketDetail';
import ItemDetail from './pages/ItemDetail';
import Search from './pages/Search';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import CreateProduct from './pages/CreateProduct';
import CreateMarket from './pages/CreateMarket';
import store from './store/index';

// console.log('store', store);

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/main/" element={<Layout />}>
        <Route path="search" element={<Search />} />
        <Route path="marketDetail/:id" element={<MarketDetail />} />
        <Route path="itemDetail/:id" element={<ItemDetail />} />
        <Route path="createProduct" element={<CreateProduct />} />
        <Route path="createMarket" element={<CreateMarket />} />
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
