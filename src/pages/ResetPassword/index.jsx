/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import './ResetPassword.scss';

const ResetPassword = () => {
  const { hash } = useParams();
  const [apiResponse, setApiResponse] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [reemail, setReemail] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const verifyHash = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL_BASE}/auth/local/reset-password`,
          {
            hash: `${hash}`,
          },
        );
        setReemail(res.data.email);
        setApiResponse(res.data);
      } catch (error) {
        setApiResponse({ message: 'token not valid' });
      } finally {
        setLoading(false);
      }
    };
    verifyHash();
  }, []);
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const validatePassword = () => {
    const confirmPassword = document.getElementById('newPassConfirm');
    if (password != confirmPassword.value) {
      confirmPassword.setCustomValidity('Las contrasenas no coinciden');
    } else {
      confirmPassword.setCustomValidity('');
    }
  };
  const handleRePassword = () => {
    validatePassword();
  };
  const handlePassUpdate = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL_BASE}/auth/local/update-password`,
        {
          email: `${reemail}`,
          password: `${password}`,
        },
      );
      setApiResponse(res.data);
    } catch (error) {
      setApiResponse({ message: 'token not valid' });
    } finally {
      // eslint-disable-next-line no-alert
      alert('Contrasena Actualizada');
      navigate('/');
    }
  };

  const displayMsg = ({ email }) => {
    if (email) {
      return (
        <form
          className="reset__password--container"
          onSubmit={handlePassUpdate}
        >
          <label htmlFor="newPass">
            Ingrese su nueva contrasena:
            <input
              id="newPass"
              type="password"
              value={password}
              onChange={handlePassword}
              minLength="8"
              required
            />
          </label>
          <label htmlFor="newPassConfirm">
            Repita su nueva contrasena:
            <input
              id="newPassConfirm"
              type="password"
              onChange={handleRePassword}
              required
            />
          </label>
          <button type="submit" className="reset__password-button">
            {' '}
            Modifica tu Contrasena
          </button>
        </form>
      );
    }
    return (
      <div>
        <h1>Algo malo ha sucedido...</h1>
        <p className="reset__password__redirect">
          Token inválido o ha expirado. Comprueba tu email o vuelve a
          solicitarlo.
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

export default ResetPassword;
