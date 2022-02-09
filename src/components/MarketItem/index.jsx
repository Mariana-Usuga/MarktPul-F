/* eslint-disable react/require-default-props */
import React from 'react';
import Proptypes from 'prop-types';
import './ProductItem.scss';

const MarketItem = ({ title, image, place, address = '' }) => (
  <div className="card">
    <img src={image} alt="" />
    <div className="card-body">
      <h1>{title}</h1>
      <p>
        {'Direccion: '}
        {place ?? (address || '')}
      </p>
    </div>
  </div>
);
export default MarketItem;
MarketItem.propTypes = {
  title: Proptypes.string.isRequired,
  place: Proptypes.string,
  address: Proptypes.string,
  image: Proptypes.string.isRequired,
};
