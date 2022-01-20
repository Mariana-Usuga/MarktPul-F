import axios from 'axios';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE;

export const postProduct = async (formProduct) => {
  const reponseProduct = await axios.post(
    'http://localhost:3002/api/product',
    formProduct,
  );

  return reponseProduct.data;
};
