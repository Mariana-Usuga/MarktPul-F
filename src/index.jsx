import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ItemDetail from './pages/ItemDetail';
import MarketDetail from './pages/MarketDetail';
// import probando from './pages/probando';
// import reportWebVitals from './reportWebVitals';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/nose" element={<ItemDetail />} /> */}
      <Route path="/" element={<App />} />
      <Route path="product/:id" element={<ItemDetail />} />
      <Route path="market/:id" element={<MarketDetail />} />
      {/* <Route path="*" element={<p>Hay algo aqui</p>} /> */}
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
