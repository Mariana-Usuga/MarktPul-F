import PropTypes from 'prop-types';

import '../styles/components/marketCard.scss';

const MarketCard = ({ src, title, places }) => (
  <div className="carousel__element">
    <img src={src} alt="Market" />
    <h3>{title}</h3>
    <p>{places}</p>
  </div>
);

MarketCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  places: PropTypes.string.isRequired,
};

export default MarketCard;
