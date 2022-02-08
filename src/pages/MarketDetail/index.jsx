import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductsOfTheMarkets from '../../components/ProductsOfTheMarkets/index';
import {
  getMarket,
  getMarketProducts,
} from '../../store/services/productAndMarketServices';

import './MarketDetail.scss';

const MarketDetail = () => {
  const [products, setProducts] = useState();
  const [market, setMarket] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const prod = await getMarket(id);
    setMarket(prod);
    const prods = await getMarketProducts(id);
    setProducts(prods.data);
  }, []);

  return (
    <>
      <div className="market">
        <div className="market__itemI">
          <img
            className="market__itemI__img"
            src={market.image}
            alt="product"
          />
        </div>
        <div className="market__item">
          <h2 className="market__item__title">{market.title}</h2>
          <p className="market__item__desc">{market.description}</p>
          <p className="market__item__place">
            {market?.place ?? (market?.address || '')}
          </p>
          <p className="market__item__organizer">
            Organizado por
            <span>{` ${market.organizer}`}</span>
          </p>
        </div>
      </div>
      <h2 className="marketProducts__title">Productos de este mercado</h2>
      <ProductsOfTheMarkets products={products} />
    </>
  );
};

export default MarketDetail;
