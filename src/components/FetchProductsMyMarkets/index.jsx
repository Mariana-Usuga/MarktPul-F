import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsOfTheMarkets from '../ProductsOfTheMarkets/index';

const FetchProductsMyMarkets = () => {
  const [products, setProducts] = useState();

  useEffect(async () => {
    const response = await axios.get(
      'http://localhost:8080/api/product/report/61d9a9be6928b378ca731d76',
    );
    setProducts(response.data);
  }, []);

  return <ProductsOfTheMarkets products={products} />;
};

export default FetchProductsMyMarkets;
