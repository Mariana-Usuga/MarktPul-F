import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem';
import { fetchMarkets } from '../../store/actions/landingPageActionsCreator';
import './MainMarketGrid.scss';

const MainProductGrid = () => {
  const dispatch = useDispatch();
  const markets = useSelector((state) => state.landing.markets);
  useEffect(() => {
    dispatch(fetchMarkets());
  }, []);
  return (
    <div className="container">
      {markets.map((market) => {
        const { title, place, image, _id: id } = market;
        return (
          <Link to={`/main/marketDetail/${id}`} key={id}>
            <ProductItem title={title} place={place} image={image} />
          </Link>
        );
      })}
    </div>
  );
};
export default MainProductGrid;
