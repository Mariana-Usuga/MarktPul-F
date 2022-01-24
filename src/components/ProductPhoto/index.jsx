import PropTypes from 'prop-types';

import './ProductPhoto.scss';

const ProductPhoto = ({ image }) => (
  <div className="product">
    <img clasName="product__img" src={image} alt="product" />
  </div>
);

ProductPhoto.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ProductPhoto;
