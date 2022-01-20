import Carousel from 'react-elastic-carousel';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HeaderMain from '../components/HeaderMain';
import MarketCard from '../components/MarketCard';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import {
  fetchMarkets,
  fetchProducts,
} from '../store/actions/landingPageActionsCreator';

import '../styles/pages/landingPage.scss';

const LandingPage = () => {
  const dispatch = useDispatch();
  const markets = useSelector((state) => state.markets);
  const products = useSelector((state) => state.products);
  console.log('markets', markets);
  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    dispatch(fetchMarkets());
    dispatch(fetchProducts());
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
