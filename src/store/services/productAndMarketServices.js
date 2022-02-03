/* eslint-disable prettier/prettier */
import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

export const getMarkets = async () => axios.get(`${URL_BASE}/api/market`);

export const getProducts = () => axios.get(`${URL_BASE}/api/product`);

export const patchMarket = async (newMarket, id) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const responseProduct = await axios.patch(
    `${URL_BASE}/api/market/${id}`,
    newMarket,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return responseProduct.data;
};

export const patchProduct = async (newProduct, id) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const responseProduct = await axios.patch(
    `${URL_BASE}/api/product/${id}`,
    newProduct,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return responseProduct.data;
};
export const patchUser = async (marketArray, id) => {
  const marketupdate = { marketId: marketArray };
  const token = JSON.parse(localStorage.getItem('token'));
  const responseUser = await axios.patch(
    `${URL_BASE}/api/user/${id}`,
    marketupdate,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return responseUser.data;
};
export const getMarketProducts = async (id) => {
  const response = await axios.get(`${URL_BASE}/api/product/report/${id}`);
  return response;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${URL_BASE}/api/product/${id}`);
  return response.data;
};

export const getMarket = async (id) => {
  const response = await axios.get(`${URL_BASE}/api/market/${id}`);
  return response.data;
};

export const postMarket = async (formMarket) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const responseProduct = await axios.post(
    `${URL_BASE}/api/market`,
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
  const response = await axios.post(`${URL_BASE}/api/product`, formProduct, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getUser = async (token) => {
  const url = `${URL_BASE}/api/user/me`;
  const config = {
    method: 'get',
    url,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const response = await axios(config);
  return response;
};
