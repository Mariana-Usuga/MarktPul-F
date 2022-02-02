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
      <Link to={`/pages/marketDetail/${_id}`}>Ir a Productos</Link>
      <br />
      <Link to={`/pages/marketDetail/${_id}`}>
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
/* <tr className="market__table--row">
    <td>{title}</td>
    {description ? <td>{description}</td> : <td>-</td>}
    <td>{place}</td>
    <td>{organizer}</td>
    <td className="market__table--item">
      <img src={image} alt={title} className="market--image" />
    </td>
    <td>
      <div>
        <Link to={`/pages/marketDetail/${_id}`}>Ir a Productos</Link>
        <br />
        <Link to={`/pages/marketDetail/${_id}`}>
          {'Editar Mercado '}
          <FaRegEdit />
        </Link>
      </div>
    </td>
  </tr> */
