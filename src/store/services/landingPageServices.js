import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';

export const getMarkets = () => axios.get(`${URL_BASE}/api/market`);
export const getProducts = () => axios.get(`${URL_BASE}/api/product`);

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
