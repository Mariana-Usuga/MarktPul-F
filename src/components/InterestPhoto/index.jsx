import PropTypes from 'prop-types';

import './InterestPhoto.scss';

const InterestPhoto = ({ image }) => (
  <div className="interest">
    <img className="interest__img" src={image} alt="product" />
  </div>
);

InterestPhoto.propTypes = {
  // eslint-disable-next-line react/require-default-props
  image: PropTypes.string,
};

export default InterestPhoto;
