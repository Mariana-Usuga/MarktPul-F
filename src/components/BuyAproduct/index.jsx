/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './BuyAproduct.scss';

const BuyAproduct = () => {
  const [product, setProduct] = useState();
  const products = useSelector((state) => state.productAndMarket.products);
  const id = useSelector((state) => state.productAndMarket.idProduct);

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
  const see = () => {
    console.log('id', id, 'product', product.title);
  };
  return (
    <div className="containerBuyProduct">
      <div className="containerBuyProduct__img">
        <img src={product?.imageMain} alt="imageProduct" />
      </div>
      <div className="containerBuyProduct__title">{product?.title}</div>
      <div className="containerBuyProduct__price" onClick={see}>
        {product?.price.toLocaleString('es-MX')}
      </div>
    </div>
  );
};

export default BuyAproduct;
