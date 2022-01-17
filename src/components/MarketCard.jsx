import PropTypes from 'prop-types';
import '../styles/components/marketCard.scss';

const MarketCard = ({ market }) => (
  <div className="carousel__item">
    <img className="carousel__img" src={market.image} alt="Market" />
    <h3 className="carousel__title">{market.title}</h3>
    <p className="carousel__place">{market.place}</p>
  </div>
);

MarketCard.propTypes = {
  market: PropTypes.objectOf().isRequired,
};

export default MarketCard;
