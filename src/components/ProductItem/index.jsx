import React from 'react';
import Proptypes from 'prop-types';
import './ProductItem.scss';

const ProductItem = ({ tipoMercado, infoMercado, tagMercado, img }) => (
  <div className="card">
    <img src={img} alt="" />
    <div className="card-body">
      <a href="/">{tipoMercado}</a>
      <p>{infoMercado}</p>
      <a className="card-body__tag" href="/">
        {tagMercado[0]}
      </a>
      <a className="card-body__tag" href="/">
        {tagMercado[1]}
      </a>
      <a className="card-body__tag" href="/">
        {tagMercado[2]}
      </a>
    </div>
  </div>
);
export default ProductItem;
ProductItem.propTypes = {
  tipoMercado: Proptypes.string.isRequired,
  infoMercado: Proptypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tagMercado: Proptypes.array.isRequired,
  img: Proptypes.string.isRequired,
};
