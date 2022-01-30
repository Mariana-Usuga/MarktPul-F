import axios from 'axios';

const URL_BASE = 'http://localhost:8080' || process.env.REACT_APP_API_URL_BASE;
export const postLogin = (email, password) => {
  const data = {
    email,
    password,
  };
  const url = `${URL_BASE}/auth/local/login`;
  const config = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };
  return axios(config);
  /* .then((response) => {
      console.log(
        '🚀 ~ file: index.jsx ~ line 106 ~ .then ~ response',
        response.data.JW,
      );
      // console.log(JSON.stringify(response.data));
      // setAlert('Te has registrado Satisfactoriamente, dirígete a Login');
    })
    .catch((error) => {
      console.log(error.response.data);
      // setAlert(error.response.data.message);
    }); */
};
