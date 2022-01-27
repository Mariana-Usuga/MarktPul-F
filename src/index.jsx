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
import Cart from './pages/Cart';
import Layout from './components/Layout';
import Shipping from './pages/Shipping';
import store from './store/index';
import ActivateAcount from './pages/ActivateAccount';
import NotFound from './pages/NotFound';
import About from './pages/About';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<Layout />}>
        <Route path="" element={<About />} />
      </Route>

      <Route path="/main/" element={<Layout />}>
        <Route path="search" element={<Search />} />
        <Route path="marketDetail/:id" element={<MarketDetail />} />
        <Route path="itemDetail/:id" element={<ItemDetail />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/ship" element={<Shipping />} />
      <Route path="/activate/:hash" element={<ActivateAcount />} />
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
