import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Search from './pages/Search';
import Register from './pages/Register';
import Login from './pages/Login';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Layout from './components/Layout';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/main" element={<LandingPage />} />

      <Route path="/" element={<Layout />}>
        <Route path="search" element={<Search />} />
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root'),
);
