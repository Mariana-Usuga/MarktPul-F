import PropTypes from 'prop-types';

import './ProductPhoto.scss';

const ProductPhoto = ({ image }) => (
  <div className="product">
    <img className="product__img" src={image} alt="product" />
  </div>
);

ProductPhoto.propTypes = {
  // eslint-disable-next-line react/require-default-props
  image: PropTypes.string,
};

export default ProductPhoto;
