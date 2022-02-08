import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteMarket } from '../../store/actions/productAndMarketActions';
import { FetchMarketsUserBy } from '../../store/actions/reportMarketPageActionsCreator';

const CardReportMarket = ({
  title,
  description = '-',
  place = '-',
  organizer,
  image,
  _id,
  user,
}) => {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const { token, userIdFromToken } = user;
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(fetchDeleteMarket(_id));
      await MySwal.fire({
        title: <strong>Buen trabajo!</strong>,
        html: <i>Mercado Creado!</i>,
        icon: 'success',
      });
      dispatch(FetchMarketsUserBy(token, userIdFromToken));
    } catch (error) {
      await MySwal.fire({
        title: <strong>Algo ha sucedido</strong>,
        html: <i>{`Alguno de los campos es innválido. ${error}`}</i>,
        icon: 'error',
      });
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <div>{title}</div>
      {description ? <div>{description}</div> : <div>-</div>}
      <div>{place}</div>
      <div>{organizer}</div>
      <div>
        <img src={image} alt={title} className="market--image" />
      </div>
      <div className="market--options">
        <Link to={`/pages/productsMyMarkets/${_id}`}>Ir a Productos</Link>
        <br />
        <Link to={`/pages/updateMarket/${_id}`}>
          {'Editar Mercado '}
          <FaRegEdit />
        </Link>
        <button type="submit" onClick={onSubmit}>
          Eliminar Mercado
        </button>
      </div>
    </>
  );
};

export default CardReportMarket;

CardReportMarket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    userIdFromToken: PropTypes.string.isRequired,
  }).isRequired,
};
