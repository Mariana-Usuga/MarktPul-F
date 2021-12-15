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
  return (
    <form className="form">
      <div className="cardsImages">
        <img src={cards} alt="" />
      </div>
      <div className="dataContainer">
        <label className="dataContainer__label" htmlFor="name">
          Nombre del titular de la cuenta
          <input
            className="dataContainer__input"
            id="name"
            type="text"
            name="name"
          />
        </label>
      </div>
      <div className="dataContainer">
        <label className="dataContainer__label" htmlFor="uname">
          Número de la tarjeta
          <input
            className="dataContainer__input"
            id="uname"
            type="text"
            name="name"
          />
        </label>
      </div>
      <div className="date">
        <label className="date__label" htmlFor="uname">
          Fecha de expiración
          <select className="date__select" name="month" id="month">
            <option value="mes">Mes</option>
            {months.map((month) => (
              <option value={month.month}>{month.month}</option>
            ))}
          </select>
          <select className="date__select" name="month" id="month">
            <option value="año">Año</option>
            {months.map((year) => (
              <option value={year.year}>{year.year}</option>
            ))}
          </select>
        </label>
      </div>
      <button className="btnCard" type="button">
        Usar esta tarjeta
      </button>
    </form>
  );
};

export default CardPayment;
