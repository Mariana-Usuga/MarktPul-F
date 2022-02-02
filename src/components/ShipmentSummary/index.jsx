/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './ShipmentSummary.scss';

const priceFormat = (amount) => {
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(amount);
  return price;
};

const ShipmentSummary = () => {
  const aProduct = useSelector((state) => state.pay.aProduct);
  const [product, setProduct] = useState({});
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cartReducer.cart);
  const id = useSelector((state) => state.productAndMarket.idProduct);
  const products = useSelector((state) => state.productAndMarket.products);
  // eslint-disable-next-line prettier/prettier
  const reducer = (prevValue, currentValue) => prevValue + currentValue.price * currentValue.qty;
  const [cartPrice, setCartPrice] = useState(0);
  useEffect(() => {
    for (const productItem of products) {
      if (id === productItem._id) {
        const price = productItem.price.toLocaleString('es-MX');
        const productUpdate = {
          ...productItem,
          price,
        };
        setProduct(productUpdate);
        return;
      }
    }
  }, []);
  useEffect(() => {
    setCartPrice(cart.reduce(reducer, 0));
  }, [cart]);

  const see = () => {
    console.log('id', id, 'product', product);
  };
  return (
    <div className="shipmentSummary">
      <div className="shipmentSummary__title">
        <h2 onClick={see}>Resumen del envio</h2>
      </div>
      <h4 className="addressTitle">Direccion de envio</h4>
      <div className="containerDiv">
        <div className="itemDiv">
          <span className="itemDiv__place">Mi casa</span>
          <span className="itemDiv__address">{user.location?.address}</span>
          <span className="itemDiv__cityAndCountry">
            {`${user.location?.city}, ${user.location?.country}`}
          </span>
        </div>
        <div className="totalShipping">
          <span className="totalShipping__total">Total Envio</span>
          <span className="totalShipping__price">
            {aProduct
              ? product.price?.toLocaleString('es-MX')
              : priceFormat(cartPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShipmentSummary;
