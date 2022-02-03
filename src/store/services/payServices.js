import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';

export const postPay = async (paymentData) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await axios.post(
    `${URL_BASE}/api/payments/make-payment`,
    paymentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
