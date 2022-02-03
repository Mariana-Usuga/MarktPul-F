import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardReportMarket = ({
  title,
  description,
  place,
  organizer,
  image,
  _id,
}) => (
  <tr className="cart__table--row">
    <td>{title}</td>
    <td>{description}</td>
    <td>{place}</td>
    <td>{organizer}</td>
    <td className="cart__table--item">
      <img src={image} alt={title} className="cart--image" />
    </td>
    <td>
      <Link to={`/pages/marketDetail/${_id}`}>Ir a Productos</Link>
      <br />
      <Link to={`/pages/marketDetail/${_id}`}>Editar Mercados</Link>
    </td>
  </tr>
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
