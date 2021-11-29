import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SocialMediaButton = ({ media }) => {
  const icon = media === 'Google' ? faGoogle : faFacebook;
  const iconClass = media === 'Google' ? 'user__form--google' : 'user__form--facebook';
  return (
    <button type="button" className={iconClass}>
      <FontAwesomeIcon icon={icon} />
      <p>
        Inicia con
        {media}
      </p>
    </button>
  );
};

SocialMediaButton.propTypes = {
  media: PropTypes.string.isRequired,
};

export default SocialMediaButton;
