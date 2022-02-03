import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../../store/services/productAndMarketServices';

import './BuyAproduct.scss';

const BuyAproduct = ({ id }) => {
  const [product, setProduct] = useState();

  useEffect(async () => {
    const product = await getProduct(id);
    setProduct(product);
  }, []);

  return (
    <div className="containerBuyProduct">
      <div className="containerBuyProduct__img">
        <img src={product?.imageMain} alt="imageProduct" />
      </div>
      <div className="containerBuyProduct__title">{product?.title}</div>
      <div className="containerBuyProduct__price">
        {product?.price.toLocaleString('es-MX')}
      </div>
    </div>
  );
};
BuyAproduct.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BuyAproduct;
