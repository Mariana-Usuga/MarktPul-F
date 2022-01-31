import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';

export const getCart = () => {
  const cart = localStorage.getItem('cartProduct')
    ? JSON.parse(localStorage.getItem('cartProduct'))
    : [];
  return cart;
};
// eslint-disable-next-line prettier/prettier
export const getProduct = async (product) => {
  const { _id: id } = product;
  console.log(id);
  try {
    const res = await axios.get(`${URL_BASE}/api/product/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateProduct = (product) => {
  const cart = JSON.parse(localStorage.getItem('cartProduct'));
  const item = cart.filter((element) => element._id === product._id);
  return item;
};
