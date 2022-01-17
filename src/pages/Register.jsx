import React, { useState, useEffect } from 'react';
import {
  validateEmail,
  validatePassword,
  validateSubmit,
  validateUsername,
} from '../utils/form-validation';
import sideImg from '../imgs/tanya-pro-dYtLnwlETDg-unsplash.jpg';
import '../styles/pages/register.css';

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

  const handleEmail = ({ target }) => {
    if (!validateEmail(target.value)) {
      setErrors({
        ...errors,
        email: 'Not a valid email',
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
        username: 'Username lenght needs to be 5+ chars',
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
        password: 'password length must be 8+ chars, with numbers',
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
        repassword: 'passwords do not match',
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

  return (
    <div className="register">
      <figure className="register__image">
        <img src={sideImg} alt="Flea Market" />
      </figure>
      <section className="register__form">
        <h1 className="register__form--title">Regístrate</h1>

        <form action="" method="post" className="register__form--form">
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
              {`Error: ${errors.email}`}
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
              {`Error: ${errors.username}`}
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
              {`Error: ${errors.password}`}
            </span>
          ) : null}

          <label htmlFor="repassword">
            Confirma tu contraseña
            <input
              type="repassword"
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
              {`Error: ${errors.repassword}`}
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
