/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JWTDecode from 'jwt-decode';
import { FetchMarketsUserBy } from '../../store/actions/reportMarketPageActionsCreator';
import CardReportMarket from '../../components/CardReportMarket';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import './ReportMarket.scss';

const ReportMarket = () => {
  const dispatch = useDispatch();
  const markets = useSelector((state) => state.report.marketsUser);
  const token = useSelector((state) => state.auth.token);
  const userIdFromToken = token
    ? JWTDecode(getCurrentLocalStorage('token'))?._id
    : null;
  useEffect(() => {
    dispatch(FetchMarketsUserBy(token, userIdFromToken));
  }, []);
  return (
    <>
      <h1>MERCADOS</h1>
      <div className="market--thead">
        <div>Market</div>
        <div>Descripcion</div>
        <div>Dirección</div>
        <div>Organizador</div>
        <div>Imagen</div>
        <div>Opciones</div>
      </div>
      <div className="market--tbody">
        {markets.map((market) => (
          <CardReportMarket
            title={market.title}
            description={market.description}
            place={market.place}
            organizer={market.organizer}
            image={market.image}
            _id={market._id}
            key={market._id}
          />
        ))}
      </div>
    </>
  );
};

export default ReportMarket;
