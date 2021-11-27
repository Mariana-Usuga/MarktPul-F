import Carousel from 'react-elastic-carousel';
import HeaderMain from '../components/HeaderMain';
import MarketCard from '../components/MarketCard';
import ProductCard from '../components/ProductCard';
import '../styles/pages/landingPage.scss';
import mercado from '../styles/image/mercado1.png';
import mercado2 from '../styles/image/mercado2.png';
import mercado3 from '../styles/image/mercado3.png';
import product from '../styles/image/product.png';
import product2 from '../styles/image/product2.png';
import product3 from '../styles/image/product3.png';
import product4 from '../styles/image/product4.png';
import product5 from '../styles/image/product5.png';

const LandingPage = () => {
  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <HeaderMain />
      <h2 className="titleMarket">Mercados Destacados</h2>
      <Carousel className="carousel" breakPoints={breakPoints}>
        <MarketCard
          src={mercado}
          title="Mercado1"
          places="Fisico: Calle 72#36-08"
        />
        <MarketCard
          src={mercado2}
          title="Mercado2"
          places="Fisico: Calle 72#36-08"
        />
        <MarketCard
          src={mercado3}
          title="Mercado3"
          places="Fisico: Calle 72#36-08"
        />
        <MarketCard
          src={mercado}
          title="Mercado4"
          places="Fisico: Calle 72#36-08"
        />
        <MarketCard
          src={mercado2}
          title="Mercado5"
          places="Fisico: Calle 72#36-08"
        />
        <MarketCard
          src={mercado3}
          title="Mercado6"
          places="Fisico: Calle 72#36-08"
        />
      </Carousel>

      <h2 className="titleProductCard">Ropa, calzado y accesorios</h2>
      <div className="productCard">
        <ProductCard
          src={product2}
          title="Camisa para hombre"
          price="$20.000"
        />
        <ProductCard
          src={product}
          title="Zapatillas para mujer AIR"
          price="$30.000"
        />
        <ProductCard
          src={product3}
          title="Chaqueta negra de cuero"
          price="$20.000"
        />
        <ProductCard
          src={product2}
          title="Camisa para hombre"
          price="$20.000"
        />
        <ProductCard
          src={product}
          title="Zapatillas para mujer AIR"
          price="$30.000"
        />
      </div>

      <h2 className="titleProductCard">Casa y Cocina</h2>
      <div className="productCard">
        <ProductCard src={product4} title="Cajon rosado" price="$20.000" />
        <ProductCard src={product5} title="Frasco" price="$20.000" />
        <ProductCard src={product4} title="Cajon rosado" price="$20.000" />
        <ProductCard src={product5} title="Frasco" price="$20.000" />
        <ProductCard src={product4} title="Cajon rosado" price="$20.000" />
      </div>
    </>
  );
};

export default LandingPage;
