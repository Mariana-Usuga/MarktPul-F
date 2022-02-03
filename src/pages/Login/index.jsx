/* eslint-disable */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../../store/actions/authActionsCreator';
import SocialMediaButton from '../../components/SocialMediaButton';
import ForgetPassword from '../../components/ForgetPassword';
import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ error: '' });
  const token = useSelector((state) => state.auth.token);
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handlingForm = (e) => {
    e.preventDefault();
    dispatch(fetchLogin(email, password));
    setIsSubmit(true);
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };
  const handleForgot = () => {
    const login = document.getElementById('login');
    const forget = document.getElementById('forget');
    login.style.display = 'none';
    forget.style.display = 'flex';
  };

  useEffect(() => {
    if (token) {
      setErrors({ error: '' });
      localStorage.setItem('token', JSON.stringify(token));
      navigate('/', { replace: true });
    } else {
      setErrors({ ...errors, error: 'Email or password are wrong' });
    }
  }, [token]);

  return (
    <div className="login">
      <figure className="login__image">
        <img
          src="https://res.cloudinary.com/db3njhxi0/image/upload/v1642973939/philippe-tinembart-AECyP4zx5Y0-unsplash_gvdude.jpg"
          alt="Flea Market"
        />
      </figure>
      <section className="login__form" id="login">
        <h1 className="login__form--title">Inicio de sesión</h1>
        <form
          action="submit"
          onSubmit={handlingForm}
          method="post"
          className="login__form--form"
        >
          <label htmlFor="email">
            Correo Electrónico
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@direccion.com"
              required
              value={email}
              onChange={handleEmail}
            />
          </label>
          <label htmlFor="password">
            Contraseña
            <input
              type={passwordShown ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679; "
              minLength="8"
              required
              value={password}
              onChange={handlePassword}
            />
          </label>
          <div className="checkbox">
            <input
              id="checkbox"
              type="checkbox"
              onClick={togglePasswordVisiblity}
            />
            <label htmlFor="checkbox">Mostrar Contrasena</label>
          </div>
          {errors.error.length && isSubmit ? (
            <span style={{ color: 'red', fontWeight: 700 }}>
              Hay un error con tu email o contraseña.
            </span>
          ) : null}
          <label>
            <input
              type="submit"
              value="Iniciar Sesión"
              className="login__button"
            />
          </label>
        </form>
        <p className="login__forgot" onClick={handleForgot}>
          ¿Olvido su contraseña?
        </p>
        <h4>
          ¿No tienes cuenta?,
          <a href="/login" id="login__form--registro">
            Registrate
          </a>
          ó ingrese con:
        </h4>
        <div className="login__social">
          <SocialMediaButton media="Google" />
          <SocialMediaButton media="Facebook" />
        </div>
      </section>

      <ForgetPassword />
    </div>
  );
};

export default Login;
