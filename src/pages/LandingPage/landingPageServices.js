import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

export const getMarkets = () => axios.get(`${URL_BASE}/api/market`);
export const getProducts = () => axios.get(`${URL_BASE}/api/product`);
