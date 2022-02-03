import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JWTDecode from 'jwt-decode';
import { FetchMarketsUserBy } from '../../store/actions/reportMarketPageActionsCreator';
import CardReportMarket from '../../components/CardReportMarket';

const ReportMarket = () => {
  const dispatch = useDispatch();
  const markets = useSelector((state) => state.report.marketsUser);
  const token = useSelector((state) => state.auth.token);
  const userIdFromToken = token ? JWTDecode(token.JWT)._id : null;
  useEffect(() => {
    dispatch(FetchMarketsUserBy(token, userIdFromToken));
  }, []);
  return (
    <>
      <h1>MERCADOS</h1>
      <table>
        <thead>
          <tr>
            <th>Market</th>
            <th>Descripcion</th>
            <th>Dirección</th>
            <th>organizador</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </>
  );
};

export default ReportMarket;
