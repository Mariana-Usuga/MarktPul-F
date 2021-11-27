import '../styles/components/productCard.scss';
import PropTypes from 'prop-types';

const ProductCard = ({ src, title, price }) => (
  <div className="productCard__item">
    <img className="productCard__img" src={src} alt="Product" />
    <h3 className="productCard__subtitle">{title}</h3>
    <p className="productCard__price">{price}</p>
  </div>
);

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
