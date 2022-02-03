import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CardReportMarket = ({
  title,
  description = '-',
  place = '-',
  organizer,
  image,
  _id,
}) => (
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
    </div>
  </>
);

export default CardReportMarket;

CardReportMarket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};
