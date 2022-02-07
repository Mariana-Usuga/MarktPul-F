import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__item">
      <p className="footer__item--logo">MarktPul</p>
    </div>
    <div className="footer__item">
      <h3>MERCADOS</h3>
      <Link to="./../../pages/search">Categorias</Link>
      <p>Marcas</p>
      <p>Ofertas</p>
    </div>
    <div className="footer__item">
      <h3>POLITICAS</h3>
      <Link to="../../terms">Terminos y Condiciones</Link>
    </div>
    <div className="footer__item">
      <h3>MARKTPUL</h3>
      <Link to="./../../about">Sobre nosotros</Link>
    </div>
    <div className="footer__item">
      <i className="footer__fab fab fa-facebook-square" />
      <i className="fab fa-twitter-square" />
      <i className="fab fa-instagram-square" />
    </div>
  </footer>
);
export default Footer;
