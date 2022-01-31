/* eslint-disable no-alert */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  validateEmail,
  validatePassword,
  validateSubmit,
  validateUsername,
} from './form-validation';
import './Register.scss';

const formErrors = {
  username: '',
  email: '',
  password: '',
  repassword: '',
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [errors, setErrors] = useState(formErrors);
  const navigate = useNavigate();

  const handleEmail = ({ target }) => {
    if (!validateEmail(target.value)) {
      setErrors({
        ...errors,
        email: 'No es un email válido',
      });
    } else {
      setErrors({ ...errors, email: '' });
    }
    setEmail(target.value);
  };

  const handleUsername = ({ target }) => {
    if (!validateUsername(target.value)) {
      setErrors({
        ...errors,
        username: 'El nombre de usuario debe tener 5+ chars',
      });
    } else {
      setErrors({ ...errors, username: '' });
    }
    return setUsername(target.value);
  };

  const handlePassword = ({ target }) => {
    if (!validatePassword(target.value)) {
      setErrors({
        ...errors,
        password: 'La constraseña debe tener 8+ carácters alfanuméricos',
      });
    } else {
      setErrors({ ...errors, password: '' });
    }
    setPassword(target.value);
  };

  const handleRepassword = ({ target }) => {
    if (
      !validatePassword(target.value) &&
      !(password === target.value) &&
      target.value.length > 0
    ) {
      setErrors({
        ...errors,
        repassword: 'Las conraseñas no coinciden',
      });
    } else {
      setErrors({ ...errors, repassword: '' });
    }
    setRepassword(target.value);
  };

  useEffect(() => {
    if (password !== repassword) {
      setErrors({
        ...errors,
        repassword: 'passwords do not match',
      });
    } else {
      setErrors({ ...errors, repassword: '' });
    }
  }, [password, repassword]);
  const handleSignUp = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      username,
    };
    const url = `${process.env.REACT_APP_API_URL_BASE}/api/user`; /* 'http://localhost:8080/api/user' */
    const config = {
      method: 'post',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
    axios(config).then(() => {
      alert('Gracias por registrarte! (este alert es feo y lo sabemos)');
      navigate('/');
    });
  };
  return (
    <div className="register">
      <figure className="register__image">
        <img
          src="https://res.cloudinary.com/db3njhxi0/image/upload/v1642973938/tanya-pro-dYtLnwlETDg-unsplash_tihkwi.jpg"
          alt="Flea Market"
        />
      </figure>
      <section className="register__form">
        <h1 className="register__form--title">Regístrate</h1>

        <form
          /*  action=""
          method="post" */
          className="register__form--form"
          onSubmit={handleSignUp}
        >
          <label htmlFor="email">
            Correo electrónico
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              name="email"
              data-testid="email-input"
              id="email"
              title="email con dominio válido"
              required
            />
          </label>
          {errors.email !== '' || undefined ? (
            <span
              data-testid="error-email"
              style={{ color: 'red', fontSize: '6' }}
            >
              {`${errors.email}`}
            </span>
          ) : null}

          <label htmlFor="username">
            Nombre de usuario
            <input
              type="text"
              name="username"
              id="username"
              data-testid="username-input"
              placeholder=""
              value={username}
              title="Usuario de la plataforma"
              required
              onChange={handleUsername}
            />
          </label>
          {errors.username !== '' || undefined ? (
            <span
              data-testid="error-username"
              style={{ color: 'red', fontSize: '6' }}
            >
              {`${errors.username}`}
            </span>
          ) : null}

          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              name="password"
              id="password"
              data-testid="password-input"
              value={password}
              onChange={handlePassword}
              title="Debe tener 8 carácteres al menos un número y una letra"
              required
              placeholder=""
            />
          </label>
          {errors.password !== '' ? (
            <span
              data-testid="error-password"
              style={{ color: 'red', fontSize: '6' }}
            >
              {`${errors.password}`}
            </span>
          ) : null}

          <label htmlFor="repassword">
            Confirma tu contraseña
            <input
              type="password"
              name="repassword"
              id="repassword"
              data-testid="repassword-input"
              title="Debe ser igual al password"
              value={repassword}
              onChange={handleRepassword}
              required
              placeholder=""
            />
          </label>
          {errors.repassword !== '' ? (
            <span
              data-testid="error-repassword"
              style={{ color: 'red', fontSize: '6' }}
            >
              {`${errors.repassword}`}
            </span>
          ) : null}

          <label htmlFor="register__button">
            <input
              type="submit"
              disabled={validateSubmit(errors)}
              value="Registrarse"
              className="register__button"
              id="register__button"
            />
          </label>
        </form>
        <h2>¿Ya tienes cuenta?</h2>
        <section className="login__social">
          <button type="submit" className="login__form--google">
            <img src="https://freesvg.org/img/1534129544.png" alt="" />
            Inicia con Google
          </button>
          <button type="submit" className="login__form--facebook">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt=""
            />
            Inicia con Facebook
          </button>
        </section>
      </section>
    </div>
  );
};

export default Register;
