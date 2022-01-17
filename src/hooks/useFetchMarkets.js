import { useEffect, useState } from 'react';
import { getMarkets } from '../utils/landingPageServices';

const useFetchMarkets = (params = '') => {
  const [products, setProducts] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getMarkets(params).then((product) => {
      setProducts({
        data: product,
        loading: false,
      });
    });
  }, []);
  return products;
};
export default useFetchMarkets;
