import axios from 'axios';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE;

export const postProduct = async (formProduct) => {
  // console.log('url', URL_BASE);
  await axios.post('http://localhost:3002/api/product', formProduct);
  // console.log('product', product);
};
