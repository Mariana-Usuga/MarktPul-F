import { useSelector } from 'react-redux';

import './BuyAproduct.scss';

const BuyAproduct = () => {
  const product = useSelector((state) => state.landing.product);
  const price = product.price.toLocaleString('es-MX');

  return (
    <div className="containerBuyProduct">
      <div className="containerBuyProduct__img">
        <img src={product.imageMain} alt="imageProduct" />
      </div>
      <div className="containerBuyProduct__title">{product.title}</div>
      <div className="containerBuyProduct__price">{price}</div>
    </div>
  );
};

export default BuyAproduct;
