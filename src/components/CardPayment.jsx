import { useState } from 'react';
import cards from '../styles/image/cards.png';

import '../styles/components/cardPayment.scss';

const CardPayment = () => {
  const months = [
    { month: '01', year: '21' },
    { month: '02', year: '22' },
    { month: '03', year: '23' },
    { month: '04', year: '24' },
    { month: '05', year: '25' },
    { month: '06', year: '26' },
    { month: '07', year: '27' },
    { month: '08', year: '28' },
    { month: '09', year: '29' },
    { month: '10', year: '30' },
    { month: '11', year: '31' },
    { month: '12', year: '32' },
    { year: '33' },
    { year: '34' },
    { year: '35' },
    { year: '36' },
    { year: '37' },
    { year: '38' },
    { year: '39' },
    { year: '40' },
  ];
  const [form, setForm] = useState({
    holdersName: '',
    number: '',
    month: '',
    year: '',
  });
  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...form };
    newState[name] = value;
    setForm(newState);
  };

  const sendForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={sendForm} className="form">
      <div className="cardsImages">
        <img src={cards} alt="" />
      </div>
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
            {months.map((month, index) => (
              <option value={month.month} key={month[index]}>
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
            {months.map((year, index) => (
              <option value={year.year} key={year[index]}>
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
