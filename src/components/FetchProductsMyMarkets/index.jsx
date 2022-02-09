import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductsOfTheMarkets from '../ProductsOfTheMarkets/index';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';

const FetchProductsMyMarkets = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();

  useEffect(async () => {
    const response = await axios.get(`${URL_BASE}/api/product/report/${id}`);
    setProducts(response.data);
  }, []);

  return (
    <div>
      <h1>Listado de productos del mercado</h1>
      <ProductsOfTheMarkets products={products} />
    </div>
  );
};

export default FetchProductsMyMarkets;
