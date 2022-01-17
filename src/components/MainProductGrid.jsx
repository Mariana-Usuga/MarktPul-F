import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import '../styles/components/MainProductGrid.scss';
import { getMarkets } from '../utils/landingPageServices';

const MainProductGrid = () => {
  const [markets, setMarkets] = useState([]);
  useEffect(() => {
    const getMarketshow = async () => {
      const getMarket = await getMarkets();
      setMarkets(getMarket.data);
    };
    getMarketshow();
  }, [markets]);
  return (
    <div className="container">
      {markets.map((market) => {
        const {
          /* tipoMercado */ place,
          description,
          image,
          _id: id,
          title,
        } = market;
        return (
          <Link
            to={`/main/marketDetail/${id}`}
            key={id}
            style={{ textDecoration: 'none' }}
          >
            <ProductItem
              title={title}
              // tipoMercado={tipoMercado}
              description={description}
              // tagMercado={tagMercado}
              image={image}
              place={place}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default MainProductGrid;
