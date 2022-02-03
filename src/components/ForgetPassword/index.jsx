import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handlingForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8080/auth/local/forgot-password',
        {
          email: `${email}`,
        },
      );
      return res.data;
    } catch (error) {
      return { message: 'token not valid' };
    } finally {
      // eslint-disable-next-line no-alert
      alert('Correo Enviado');
      navigate('/');
    }
  };
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  return (
    <section className="login__form" id="forget">
      <h1 className="login__form--title">Recupere su contraseña</h1>
      <form
        action="submit"
        onSubmit={handlingForm}
        method="post"
        className="login__form--form"
      >
        <label htmlFor="femail">
          Ingrese su Correo Electrónico
          <input
            type="email"
            name="email"
            id="femail"
            placeholder="email@direccion.com"
            required
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label htmlFor="button">
          <input
            type="submit"
            value="Recuperar contraseña"
            className="login__button"
          />
        </label>
      </form>
    </section>
  );
};

export default ForgetPassword;
