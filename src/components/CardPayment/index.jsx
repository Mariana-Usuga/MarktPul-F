/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import {
  // fetchDoPay,
  showLoader,
  hideLoader,
} from '../../store/actions/payActionsCreator';
import { postPay } from '../../store/services/payServices';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';

import './CardPayment.scss';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';

const CardPayment = ({ setCanProceed, id }) => {
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
  // const aProduct = useSelector((state) => state.pay.aProduct);
  const isLoading = useSelector((state) => state.pay.isLoading);
  const estimatedTotal = useSelector(
    (state) => state.cartReducer.estimatedTotal,
  );
  const [showLoaderState, setShowLoaderState] = useState(null);
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const token = getCurrentLocalStorage('token');
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  useEffect(async () => {
    setCanProceed(false);
    const product = await axios.get(`${URL_BASE}/api/product/${id}`);
    setProduct(product.data);
  }, []);

  useEffect(() => {
    if (paymentSuccess) {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
  }, [paymentSuccess]);

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

  const [formComplete, setFormComplete] = useState(false);
  useEffect(() => {
    const { number, year, month, cvc } = form;
    const data = [number, year, month, cvc];
    const val = data.reduce((acc, curr) => {
      return !curr.length ? acc + 1 : acc;
    }, 0);
    if (val === 0) {
      setFormComplete(true);
    }
  }, [form]);

  const sendForm = async (e) => {
    e.preventDefault();
    const numString = String(estimatedTotal);
    const totalWithOutComma = numString
      .replace(/[^\d,]/g, '')
      .replace(/,/g, '');

    const paymentData = {
      docType: 'CC',
      docNumber: '10358519',
      value: id ? product.price : totalWithOutComma,
      currency: 'COP',
      description: 'Product Payment',
      cardNumber: form.number,
      cardExpYear: form.year,
      cardExpMonth: form.month,
      cardCVC: form.cvc,
    };
    dispatch(showLoader());
    setShowLoaderState(true);
    const resPay = await postPay(paymentData, token);
    if (resPay.status === 200) {
      setPaymentSuccess(true);
      setPaymentError(null);
    } else {
      setPaymentSuccess(false);
      setPaymentError('Ha ocurrido un error con el pago intenta denuevo');
    }
    dispatch(hideLoader());
  };

  return (
    <form onSubmit={sendForm} className="form">
      <div className="cardsImages">
        <img
          src="https://res.cloudinary.com/db3njhxi0/image/upload/v1643132763/cards_makxmy.png"
          alt=""
        />
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
      {paymentError ? <span>{paymentError}</span> : null}
      <button
        className="btnCard"
        style={{ marginTop: 20, marginLeft: 100 }}
        type="submit"
        disabled={!formComplete}
      >
        {!isLoading && !showLoaderState ? (
          'Pagar con esta tarjeta'
        ) : !showLoaderState ? (
          <img
            className="loading"
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt="loading content"
          />
        ) : (
          <div>
            <FaCheckCircle />
          </div>
        )}
      </button>
    </form>
  );
};

CardPayment.propTypes = {
  setCanProceed: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default CardPayment;
