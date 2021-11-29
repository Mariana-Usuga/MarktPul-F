import React, { useState, useEffect } from 'react';
import sideImg from '../imgs/tanya-pro-dYtLnwlETDg-unsplash.jpg';
import '../styles/components/register.css';
import { validateEmail,
  validatePassword,
  validateSubmit,
  validateUsername } from '../utils/form-validation';

const formErrors = {
  username: '',
  email: '',
  password: 'empty',
  repassword: 'empty',
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [errors, setErrors] = useState(formErrors);

  const handleEmail = ({ target }) => {
    if (!validateEmail(target.value)) {
      setErrors({ ...errors, email: 'Not a valid email' });
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
        password: 'password lenght must be 8+ chars, with numbers',
      });
    } else {
      setErrors({ ...errors, password: '' });
    }
    setPassword(target.value);
  };

  const handleRepassword = ({ target }) => {
    if (
      !validatePassword(target.value)
      && !(password === target.value)
      && target.value.length > 0
    ) {
      setErrors({ ...errors, repassword: 'passwords do not match' });
    } else {
      setErrors({ ...errors, repassword: '' });
    }
    setRepassword(target.value);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      validateSubmit(errors);
    }
  }, [errors]);

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
              id="email"
              title="email con dominio válido"
              required
            />
          </label>

          <label htmlFor="username">
            Nombre de usuario
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              value={username}
              title="Usuario de la plataforma"
              required
              onChange={handleUsername}
            />
          </label>

          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
              title="Debe tener 8 carácteres al menos un número y una letra"
              required
              placeholder=""
            />
          </label>

          <label htmlFor="password">
            Confirma tu contraseña
            <input
              type="password"
              name="password"
              id="repassword"
              title="Debe ser igual al password"
              value={repassword}
              onChange={handleRepassword}
              required
              placeholder=""
            />
          </label>

          <label htmlFor="register__button">
            <input
              type="submit"
              disabled={validateSubmit(errors)}
              value="Registrarse"
              className="register__buttonasdf"
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
