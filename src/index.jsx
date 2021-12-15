import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import MarketDetail from './pages/MarketDetail';
import ItemDetail from './pages/ItemDetail';
import Search from './pages/Search';
// import Register from './pages/Register';
// import Login from './pages/Login';
import Layout from './components/Layout';
// import Pay from './pages/Pay';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}

      <Route path="main" element={<Layout />}>
        <Route path="search" element={<Search />} />
        {/* <Route path="marketDetail/:id" element={<MarketDetail />} /> */}
        <Route path="itemDetail/:id" element={<ItemDetail />} />
        {/* <Route path="pay" element={<Pay />} /> */}
      </Route>
      {/* <Route path="/pay" element={<Pay />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
