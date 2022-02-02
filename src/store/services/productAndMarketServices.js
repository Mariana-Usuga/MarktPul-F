/* eslint-disable prettier/prettier */
import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

export const getMarkets = async () => axios.get(`${URL_BASE}/api/market`);
export const getProducts = () => axios.get(`${URL_BASE}/api/product`);
export const patchMarket = () => axios.patch('http://localhost:8080/api/market');
export const patchProduct = () => axios.patch('http://localhost:8080/api/product');
export const getMarketProducts = async (id) => {
  const response = await axios.get(`http://localhost:8080/api/product/report/${id}`);
  console.log('response', response);
};

export const postMarket = async (formMarket) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const responseProduct = await axios.post(
    'http://localhost:8080/api/market',
    // `${URL_BASE}/api/product`
    formMarket,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return responseProduct.data;
};

export const postProduct = async (formProduct) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await axios.post(
    'http://localhost:8080/api/product',
    // `${URL_BASE}/api/product`
    formProduct,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  console.log('response post product', response);
  return response;
};

export const getUser = (token) => {
  const url = `${URL_BASE}/api/user/me`;
  const config = {
    method: 'get',
    url,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};
