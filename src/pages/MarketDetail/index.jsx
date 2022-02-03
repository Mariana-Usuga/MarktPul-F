import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InterestPhoto from '../../components/InterestPhoto';

import './MarketDetail.scss';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';

const MarketDetail = () => {
  const [market, setMarket] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMarketshow = async () => {
      const getMarket = await axios.get(`${URL_BASE}/api/market/${id}`);
      setMarket(getMarket.data);
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
