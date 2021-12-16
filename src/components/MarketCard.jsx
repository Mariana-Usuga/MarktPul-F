import PropTypes from 'prop-types';
import '../styles/components/marketCard.scss';

const MarketCard = ({ market }) => (
  <div className="carousel__item">
    <img clasName="carousel__img" src={market.image} alt="Market" />
    <h3 clasName="carousel__title">{market.title}</h3>
    <p clasName="carousel__place">{market.place}</p>
  </div>
);

MarketCard.propTypes = {
  market: PropTypes.arrayOf([]).isRequired,
};

export default MarketCard;
