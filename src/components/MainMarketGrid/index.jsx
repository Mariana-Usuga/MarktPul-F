/* eslint-disable  */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MarketItem from '../MarketItem';
import ProductItem from '../ProductItem';
import { fetchMarkets } from '../../store/actions/productAndMarketActions';
import './MainMarketGrid.scss';

const MainProductGrid = () => {
  const marketsFilter = useSelector((state) => state.search.markets_filter);
  const productsFilter = useSelector((state) => state.search.products_filter);
  const dispatch = useDispatch();
  const markets = useSelector((state) => state.productAndMarket.markets);
  useEffect(() => {
    dispatch(fetchMarkets());
  }, []);
  return (
    <div className="container">
      {marketsFilter.map((market) => {
        const { title, place, virtual, address, image, _id: id } = market;
        return (
          <Link to={`/pages/marketDetail/${id}`} key={id}>
            <MarketItem
              title={title}
              place={virtual ? 'Virtual' : place ?? (address || ' ')}
              image={image}
            />
          </Link>
        );
      })}
      {productsFilter.map((product) => {
        const { title, imageMain, _id: id } = product;
        return (
          <Link to={`/pages/itemDetail/${id}`} key={id}>
            <ProductItem title={title} imageMain={imageMain} />
          </Link>
        );
      })}
    </div>
  );
};
export default MainProductGrid;
