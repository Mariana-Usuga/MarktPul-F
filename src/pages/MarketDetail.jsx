import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMarket } from './marketsData';
import InterestPhoto from '../components/InterestPhoto';

import '../styles/pages/marketDetail.scss';

const MarketDetail = () => {
  const [market, setMarket] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getMarketshow = async () => {
      await setMarket(getMarket(id));
    };
    getMarketshow();
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
          <p className="market__item__place">{market.place}</p>
          <p className="market__item__organizer">
            {' '}
            Organizado por
            <span>{` ${market.organizer}`}</span>
          </p>
          <button className="market__item__btn" type="button">
            Contactar al organizador
          </button>
        </div>
      </div>
      <div>
        <h2 className="titleInterest">Tambien te podria interesar</h2>
        <div className="interestPhotos">
          <InterestPhoto image={market.image} />
          <InterestPhoto image={market.image} />
          <InterestPhoto image={market.image} />
          <InterestPhoto image={market.image} />
          <InterestPhoto image={market.image} />
        </div>
      </div>
    </>
  );
};

export default MarketDetail;
