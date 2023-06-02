/* eslint-disable */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import JWTDecode from 'jwt-decode';
import { FetchMarketsUserBy } from '../../store/actions/reportMarketPageActionsCreator';
import CardReportMarket from '../../components/CardReportMarket';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import './ReportMarket.scss';

const ReportMarket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const markets = useSelector((state) => state.report.marketsUser);
  const token = useSelector((state) => state.auth.token);
  const userIdFromToken = token
    ? JWTDecode(getCurrentLocalStorage('token'))?._id
    : null;
    console.log('getCurrentLocalStorage ', JWTDecode(getCurrentLocalStorage('token')));
  useEffect(() => {
    dispatch(FetchMarketsUserBy(token, userIdFromToken));
  }, []);
  // useEffect(() => {
  //   dispatch(FetchMarketsUserBy(token, userIdFromToken));
  // }, [markets]);
  const handleRedirect = (e) => {
    e.preventDefault();
    navigate('/pages/createMarket');
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        height: 'auto',
      }}
    >
      <h1>Mercados</h1>
      <div>
        <div className="market--thead">
          <div>Market</div>
          <div>Descripcion</div>
          <div>Dirección</div>
          <div>Organizador</div>
          <div>Imagen</div>
          <div>Opciones</div>
        </div>
        <div className="market--tbody">
          {markets?.map((market) => (
            <CardReportMarket
              title={market.title}
              description={market.description}
              place={
                market.virtual
                  ? 'Virtual'
                  : market?.place ?? (market?.address || ' ')
              }
              organizer={market.organizer}
              image={market.image}
              _id={market._id}
              key={market._id}
              user={{ token, userIdFromToken }}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleRedirect}
        className="formMarket__btn"
        style={{ margin: 'auto' }}
        type="button"
      >
        Crear nuevo mercado
      </button>
    </div>
  );
};

export default ReportMarket;
