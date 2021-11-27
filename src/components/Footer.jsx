import React from 'react';
import '../styles/components/Footer.scss';
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__item">
        <p>MarktPul</p>
      </div>
      <div className="footer__item">
        <i className="footer__fab fab fa-facebook-square"></i>{' '}
      </div>
      <div className="footer__item">
        <i className="fab fa-instagram-square"></i>
      </div>
      <div className="footer__item">
        <i className="fab fa-twitter-square"></i>
      </div>
    </footer>
  );
};
