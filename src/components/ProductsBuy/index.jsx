import PropTypes from 'prop-types';

const ProductsBuy = ({ title, price }) => (
  <div className="shippingProducts">
    <div className="itemProduct">
      <img
        className="itemProduct__img"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
    </div>
    <div className="itemProduct__title">{title}</div>
    <span className="itemProduct__price">{price}</span>
  </div>
);

ProductsBuy.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductsBuy;
