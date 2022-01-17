import React from 'react';
import Proptypes from 'prop-types';
import '../styles/components/ProductItem.scss';

const ProductItem = ({ place, description, image, title }) => (
  <div className="card-product">
    <img src={image} alt={title} />
    <div className="card-body">
      {/* <a href="/">{tipoMercado}</a> */}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-place">{place}</p>
      {/* <a className="card-body__tag" href="/">
        {tagMercado[0]}
      </a>
      <a className="card-body__tag" href="/">
        {tagMercado[1]}
      </a>
      <a className="card-body__tag" href="/">
        {tagMercado[2]}
      </a> */}
    </div>
  </div>
);
export default ProductItem;
ProductItem.propTypes = {
  place: Proptypes.string.isRequired,
  // tipoMercado: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  // tagMercado: Proptypes.array.isRequired,
  image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};
