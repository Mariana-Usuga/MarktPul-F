/* eslint-disable consistent-return */
/* eslint-disable */

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import './ActivateAccount.scss';

const ActivateAcount = () => {
  const { hash } = useParams();
  const [apiResponse, setApiResponse] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const res = await axios.post(
          'https://marktpul-b-temp.herokuapp.com/auth/local/validate-email',
          {
            hash: `${hash}`,
          },
        );
        setApiResponse(res.data);
      } catch (error) {
        console.log(error);
        setApiResponse({ message: 'token expired or not found' });
      } finally {
        setLoading(false);
      }
    };
    activateAccount();
  }, []);

  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (timer <= 0) {
      setTimer(null);
    }
    if (!timer && apiResponse.JWT) {
      setLoading(true);
      return navigate('/login');
    }

    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  const handleRedirect = () => {
    setLoading(true);
    navigate('/login');
  };

  const displayMsg = (response) => {
    if (response?.JWT) {
      return (
        <div>
          <h1>¡Muchas Gracias por activar tu cuenta!</h1>
          <p>{`Serás redirigido al inicio en ${timer || 0} segundos...`}</p>
          <p>Si no funciona... </p>
          <button
            type="button"
            onClick={handleRedirect}
            className="activate__login-button"
          >
            {' '}
            Inicia sesión
          </button>
        </div>
      );
    }
    return (
      <div>
        <h1>Algo malo ha sucedido...</h1>
        <p className="activate__redirect">
          Token inválido o ha expirado. Comprueba tu email o intenta iniciando
          sesión.
          <span>{`${response.message}`}</span>
        </p>
      </div>
    );
  };
  return (
    <div className="ActivateAccount">
      {!loading ? (
        <div>{displayMsg(apiResponse)}</div>
      ) : (
        <div>
          <h1>Validando...</h1>
        </div>
      )}
    </div>
  );
};

export default ActivateAcount;
