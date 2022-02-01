import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

export const getMarkets = async () => axios.get(`${URL_BASE}/api/market`);
export const getProducts = () => axios.get(`${URL_BASE}/api/product`);
export const getProduct = (id) => axios.get(`${URL_BASE}/api/product/${id}`);

export const postMarket = async (formMarket) => {
  const reponseProduct = await axios.post(
    'http://localhost:3002/api/market',
    formMarket,
  );
  return reponseProduct.data;
};

export const postProduct = async (formProduct) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await axios.post(
    'http://localhost:8080/api/product',
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
