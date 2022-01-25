import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import cards from '../styles/image/cards.png';
import { postPay } from '../../store/services/payServices';

import './CardPayment.scss';

const CardPayment = () => {
  const months = [
    { id: '1', month: '01', year: '21' },
    { id: '2', month: '02', year: '22' },
    { id: '3', month: '03', year: '23' },
    { id: '4', month: '04', year: '24' },
    { id: '5', month: '05', year: '25' },
    { id: '6', month: '06', year: '26' },
    { id: '7', month: '07', year: '27' },
    { id: '8', month: '08', year: '28' },
    { id: '9', month: '09', year: '29' },
    { id: '10', month: '10', year: '30' },
    { id: '11', month: '11', year: '31' },
    { id: '12', month: '12', year: '32' },
    { id: '13', year: '33' },
    { id: '14', year: '34' },
    { id: '15', year: '35' },
    { id: '16', year: '36' },
    { id: '17', year: '37' },
    { id: '18', year: '38' },
    { id: '19', year: '39' },
    { id: '20', year: '40' },
  ];
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    holdersName: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  });
  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...form };
    newState[name] = value;
    setForm(newState);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const paymentData = {
      docType: 'CC',
      docNumber: '10358519',
      value: '116000',
      currency: 'COP',
      description: 'Product Payment',
      cardNumber: form.number,
      cardExpYear: form.year,
      cardExpMonth: form.month,
      cardCVC: form.cvc,
    };
    dispatch(postPay(paymentData, token));
    // if (response) {
    //   setLoading(true);
    // }
  };

  return (
    <form onSubmit={sendForm} className="form">
      {/* <div className="cardsImages"> */}
      {/* <img src={cards} alt="" /> */}
      {/* </div> */}
      <div className="dataContainer">
        <label className="dataContainer__label" htmlFor="holdersName">
          Nombre del titular de la cuenta
          <input
            onChange={handleChange}
            className="dataContainer__input"
            id="name"
            type="text"
            name="holdersName"
          />
        </label>
      </div>
      <div className="dataContainer">
        <label className="dataContainer__label" htmlFor="number">
          Número de la tarjeta
          <input
            onChange={handleChange}
            className="dataContainer__input"
            id="uname"
            type="number"
            name="number"
          />
        </label>
      </div>
      <div className="dataContainer">
        <label className="dataContainer__label" htmlFor="cvc">
          CVC
          <input
            onChange={handleChange}
            className="dataContainer__input"
            id="cvc"
            type="number"
            name="cvc"
          />
        </label>
      </div>
      <div className="date">
        <label className="date__label" htmlFor="month">
          Fecha de expiración
          <select
            onChange={handleChange}
            className="date__select"
            name="month"
            id="month"
          >
            <option value="mes">Mes</option>
            {months.map((month) => (
              <option value={month.month} key={month.id}>
                {month.month}
              </option>
            ))}
          </select>
          <select
            onChange={handleChange}
            className="date__select"
            name="year"
            id="year"
          >
            <option value="año">Año</option>
            {months.map((year) => (
              <option value={year.year} key={year.id}>
                {year.year}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button className="btnCard" type="submit">
        Usar esta tarjeta
      </button>
    </form>
  );
};

export default CardPayment;
