import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

export const getMarkets = async () => axios.get(`${URL_BASE}/api/market`);

export const getProducts = () => axios.get(`${URL_BASE}/api/product`);

export const postMarket = async (formMarket) => {
  const reponseProduct = await axios.post(
    'http://localhost:3002/api/market',
    formMarket,
  );
  return reponseProduct.data;
};

export const postProduct = async (formProduct) => {
  const reponseProduct = await axios.post(
    'http://localhost:3002/api/product',
    formProduct,
  );
  return reponseProduct.data;
};
