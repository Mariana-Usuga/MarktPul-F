import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './User.scss';

const User = () => {
  const hi = 'hi';
  return (
    <div className="main">
      <Header />
      {hi}
      <Footer />
    </div>
  );
};

export default User;
