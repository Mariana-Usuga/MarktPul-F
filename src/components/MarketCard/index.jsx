import PropTypes from 'prop-types';
import './MarketCard.scss';

const MarketCard = ({ market }) => (
  <div className="carousel__item">
    <img className="carousel__img" src={market.image} alt="Market" />
    <h3 className="carousel__title">{market.title}</h3>
    <p className="carousel__place">
      {market?.place ?? (market?.address || '')}
    </p>
  </div>
);

MarketCard.propTypes = {
  market: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    address: PropTypes.string,
    place: PropTypes.string,
  }).isRequired,
};

export default MarketCard;
