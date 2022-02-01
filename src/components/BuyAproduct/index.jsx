import { useSelector } from 'react-redux';

import './BuyAproduct.scss';

const BuyAproduct = () => {
  const product = useSelector((state) => state.productAndMarket.product);

  return (
    <div className="containerBuyProduct">
      <div className="containerBuyProduct__img">
        <img src={product.imageMain} alt="imageProduct" />
      </div>
      <div className="containerBuyProduct__title">{product.title}</div>
      <div className="containerBuyProduct__price">
        {product.price.toLocaleString('es-MX')}
      </div>
    </div>
  );
};

export default BuyAproduct;
