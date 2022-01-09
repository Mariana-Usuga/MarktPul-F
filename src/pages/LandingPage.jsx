import Carousel from 'react-elastic-carousel';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderMain from '../components/HeaderMain';
import MarketCard from '../components/MarketCard';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

import '../styles/pages/landingPage.scss';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;
console.log('url', URL_BASE);

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [markets, setMarkets] = useState([]);

  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    const getProductsAndGetMarkets = async () => {
      const resProducts = await axios.get(
        'https://marktpul-bk.herokuapp.com/api/product',
      );
      setProducts(resProducts.data);
      const resMarkets = await axios.get(
        'https://marktpul-bk.herokuapp.com/api/market',
      );
      setMarkets(resMarkets.data);
    };
    getProductsAndGetMarkets();
  }, []);
  return (
    <>
      <HeaderMain />
      <h2 className="titleMarket">Mercados Destacados</h2>
      <Carousel className="carousel" breakPoints={breakPoints}>
        {markets.map((market) => (
          <Link
            to={`/main/marketDetail/${market._id}`}
            key={market._id}
            style={{ textDecoration: 'none' }}
          >
            <MarketCard market={market} />
          </Link>
        ))}
      </Carousel>
      <h2 className="titleProductCard">Ropa y accesorios</h2>
      <div className="productCard">
        {products
          .filter((p) => p.category == 'accesorio' || p.category == 'ropa')
          .slice(0, 5)
          .map((product) => (
            <Link
              to={`/main/itemDetail/${product._id}`}
              key={product._id}
              style={{ textDecoration: 'none' }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
      <h2 className="titleProductCard">Hogar y electrodomesticos</h2>
      <div className="productCard">
        {products
          .filter(
            (p) => p.category == 'hogar' || p.category == 'electrodomestico',
          )
          .slice(0, 5)
          .map((product) => (
            <Link
              to={`/main/itemDetail/${product._id}`}
              key={product._id}
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
