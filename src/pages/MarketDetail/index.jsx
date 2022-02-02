import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ProductsOfTheMarkets from '../../components/ProductsOfTheMarkets/index';
import './MarketDetail.scss';

const MarketDetail = () => {
  const [products, setProducts] = useState();
  const markets = useSelector((state) => state.productAndMarket.markets);
  const [market, setMarket] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:8080/api/product/report/${id}`,
    );
    setProducts(response.data);

    for (const mar of markets) {
      if (id === mar._id) {
        setMarket(mar);
      }
    }
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
          {/* <button>Editar mercado</button> */}
        </div>
      </div>
      <h2 className="marketProducts__title">Productos de este mercado</h2>
      <ProductsOfTheMarkets products={products} />
    </>
  );
};

export default MarketDetail;
