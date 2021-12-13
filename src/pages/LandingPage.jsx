import Carousel from 'react-elastic-carousel';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderMain from '../components/HeaderMain';
import MarketCard from '../components/MarketCard';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { getMarkets } from './marketsData';

import '../styles/pages/landingPage.scss';

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const markets = getMarkets();
  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    };
    getProducts();
  }, []);
  return (
    <>
      <HeaderMain />
      <h2 className="titleMarket">Mercados Destacados</h2>
      <Carousel className="carousel" breakPoints={breakPoints}>
        {markets.map((market) => (
          <Link
            to={`/main/marketDetail/${market.id}`}
            key={market.id}
            style={{ textDecoration: 'none' }}
          >
            <MarketCard market={market} />
          </Link>
        ))}
      </Carousel>
      <h2 className="titleProductCard">Ropa y accesorios</h2>
      <div className="productCard">
        {products
          .filter((p) => p.category.includes("men's clothing"))
          .slice(0, 5)
          .map((product) => (
            <Link
              to={`/main/itemDetail/${product.id}`}
              key={product.id}
              style={{ textDecoration: 'none' }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
      <h2 className="titleProductCard">Hogar y electrodomesticos</h2>
      <div className="productCard">
        {products
          .filter((p) => p.category.includes('electronics'))
          .slice(0, 5)
          .map((product) => (
            <Link
              to={`/main/itemDetail/${product.id}`}
              key={product.id}
              style={{ textDecoration: 'none' }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
