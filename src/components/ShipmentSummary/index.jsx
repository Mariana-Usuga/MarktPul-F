/* eslint-disable*/
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../../store/services/productAndMarketServices';

import './ShipmentSummary.scss';

const priceFormat = (amount) => {
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(amount);
  return price;
};

const ShipmentSummary = ({ id }) => {
  const [product, setProduct] = useState({});
  const total = useSelector((state) => state.cartReducer.estimatedTotal);
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cartReducer.cart);

  const reducer = (prevValue, currentValue) => {
    prevValue + currentValue.price * currentValue.qty;
  };
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(async () => {
    const product = await getProduct(id);
    setProduct(product);
  }, []);

  return (
    <div className="shipmentSummary">
      <div className="shipmentSummary__title">
        <h2>Resumen del envio</h2>
      </div>
      <h4 className="addressTitle">Direccion de envio</h4>
      <div className="containerDiv">
        <div className="itemDiv">
          <span className="itemDiv__address">{user.location?.address}</span>
          <span className="itemDiv__cityAndCountry">
            {`${user.location?.city}, ${user.location?.country}`}
          </span>
        </div>
        <div className="totalShipping">
          <span className="totalShipping__total">Total Envio</span>
          <span className="totalShipping__price">
            {id ? product.price?.toLocaleString('en-US') : priceFormat(total)}
          </span>
        </div>
      </div>
    </div>
  );
};
ShipmentSummary.propTypes = {
  id: PropTypes.string.isRequired,
};
export default ShipmentSummary;
