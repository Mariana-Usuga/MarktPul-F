/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import SocialMediaButton from '../../components/SocialMediaButton';
import './Login.scss';

const Login = () => {
  const handlingForm = (event) => {
    event.preventDefault();
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="login">
      <figure className="login__image">
        <img
          src="https://res.cloudinary.com/db3njhxi0/image/upload/v1642973939/philippe-tinembart-AECyP4zx5Y0-unsplash_gvdude.jpg"
          alt="Flea Market"
        />
      </figure>
      <section className="login__form">
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
          <label>
            <input
              type="button"
              value="Iniciar Sesión"
              className="login__button"
            />
          </label>
        </form>
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
    </div>
  );
};

export default Login;
