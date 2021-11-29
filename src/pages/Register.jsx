/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import sideImg from '../imgs/tanya-pro-dYtLnwlETDg-unsplash.jpg';
import '../css/register.css';

function validateEmail(email) {
  return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
}

function validateUsername(uname) {
  return uname.length > 4;
}

function validateSubmit(errors) {
  const isValid = Object.keys(errors).filter(
    (key) => errors[key].length > 0,
  ).length;
  return isValid;
}

function validatePassword(password) {
  return (
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) &&
    password.length > 0
  );
}

let formErrors = {
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
  // const [showErrors, setShowErrors] = useState(false);

  const handleEmail = ({ target }) => {
    const { value: email } = target;
    !validateEmail(email)
      ? setErrors({ ...errors, email: 'Not a valid email' })
      : setErrors({ ...errors, email: '' });
    setEmail(email);
  };

  const handleUsername = ({ target }) => {
    const { value: username } = target;
    !validateUsername(username)
      ? setErrors({
          ...errors,
          username: 'Username lenght needs to be 5+ chars',
        })
      : setErrors({ ...errors, username: '' });
    setUsername(username);
  };

  const handlePassword = ({ target }) => {
    const { value: password } = target;
    !validatePassword(password)
      ? setErrors({
          ...errors,
          password: 'password lenght must be 8+ chars, with numbers',
        })
      : setErrors({ ...errors, password: '' });
    setPassword(password);
  };

  const handleRepassword = ({ target }) => {
    const { value: repassword } = target;
    !validatePassword(repassword) &&
    !(password === repassword) &&
    repassword.length > 0
      ? setErrors({ ...errors, repassword: 'passwords do not match' })
      : setErrors({ ...errors, repassword: '' });
    setRepassword(repassword);
  };

  useEffect(() => {
    Object.keys(errors).length > 0
      ? console.log(validateSubmit(errors), errors)
      : null;
  }, [errors]);

  return (
    <div className="register">
      <figure className="register__image">
        <img src={sideImg} alt="Flea Market" />
      </figure>
      <section className="register__form">
        <h1 className="register__form--title">Regístrate</h1>

        <form action="" method="post" className="register__form--form">
          <label htmlFor="email">Correo electrónico</label>
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            name="email"
            id="email"
            title="email con dominio válido"
            required={true}
          />

          <label htmlFor="username">Nombre de usuario</label>
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

          <label htmlFor="password">Contraseña</label>
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

          <label htmlFor="password">Confirma tu contraseña</label>
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

          <input
            type="submit"
            disabled={validateSubmit(errors)}
            value="Registrarse"
            className="register__buttonasdf"
            id="register__button"
          />
        </form>
        <h2>¿Ya tienes cuenta?</h2>
        <section className="login__social">
          <button className="login__form--google">
            <img src="https://freesvg.org/img/1534129544.png" alt="" />
            Inicia con Google
          </button>
          <button className="login__form--facebook">
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
