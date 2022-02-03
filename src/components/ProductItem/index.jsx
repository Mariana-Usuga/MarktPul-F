import React from 'react';
import Proptypes from 'prop-types';
import './ProductItem.scss';

const ProductItem = ({ title, imageMain }) => (
  <div className="card">
    <img src={imageMain} alt={title} />
    <div className="card-body">
      <h1>{title}</h1>
    </div>
  </div>
);
export default ProductItem;
ProductItem.propTypes = {
  title: Proptypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageMain: Proptypes.string.isRequired,
};
