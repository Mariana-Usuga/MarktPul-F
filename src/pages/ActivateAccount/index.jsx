/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import './ActivateAccount.scss';

const ActivateAcount = () => {
  const { hash } = useParams();
  const [apiResponse, setApiResponse] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const activateAccount = async () => {
      const res = await axios.post(
        'https://marktpul-b-temp.herokuapp.com/auth/local/validate-email',
        {
          hash: `${hash}`,
        },
      );
      setApiResponse(res.data);
    };
    activateAccount();
  }, []);

  const [timer, setTimer] = useState(5);
  useEffect(() => {
    if (timer == 0) {
      setTimer(null);
    }
    if (!timer) {
      return navigate('/');
    }

    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  return (
    <div className="ActivateAccount">
      {apiResponse.JWT ? (
        <div>
          <h1>¡Muchas Gracias por activar tu cuenta!</h1>
          <p>{`Serás redirigido al inicio en ${timer || 0} segundos...`}</p>
          <p>Si no funciona, haz click acá</p>
        </div>
      ) : (
        <div>
          <h1>Algo malo ha sucedido...</h1>
          <p>Token inválido o ha expirado</p>
        </div>
      )}
    </div>
  );
};

export default ActivateAcount;
