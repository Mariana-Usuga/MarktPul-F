/*eslint-disable*/
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UserSectionAccount from '../../components/UserSectionAccount';
import UserSectionPicture from '../../components/UserSectionPicture';

import 'react-phone-number-input/style.css';
import './User.scss';

const user = {
  _id: {
    $oid: '61f5b8ff506fd791801b17cd',
  },
  email: 'jocdiazmuic@gmail.com',
  username: 'josekdiaz',
  name: 'Jose Carlos Díaz',
  password: '$2b$10$tERZn5CnLLaBm.jO2QzWwu.NcpCPGzk8qMBdDGDDQEqz5Nii5nv/C',
  role: 'user',
  cell: '+573017559052',
  marketId: {
    $oid: '61f5b8ff506fd791801b17cb',
  },
  picture: 'https://avatars.githubusercontent.com/u/13368066?v=4',
  active: true,
  passwordResetToken: null,
  passwordResetExpires: null,
  createdAt: {
    $date: '2022-01-29T22:00:31.121Z',
  },
  updatedAt: {
    $date: '2022-01-29T22:00:54.277Z',
  },
  __v: 0,
};

const User = () => {
  return (
    <div className="user-page">
      <Header />
      <div className="user-container">
        <h1>Mis datos</h1>
        <div className="user-container__data">
          <UserSectionPicture user={user} />
          <UserSectionAccount user={user} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;
