import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navegacion from './components/Navegacion';
import ItemDetail from './pages/ItemDetail';
// import probando from './pages/probando';
// import reportWebVitals from './reportWebVitals';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navegacion />}>
        <Route path="app" element={<App />}>
          <Route path=":id" element={<ItemDetail />} />
        </Route>
        <Route path="*" element={<p>Hay algo aqui</p>} />
      </Route>
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
