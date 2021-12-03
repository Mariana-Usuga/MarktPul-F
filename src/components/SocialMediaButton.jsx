import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

const SocialMediaButton = ({ media }) => {
  const icon = media === 'Google' ? <FcGoogle /> : <BsFacebook />;
  const iconClass =
    media === 'Google' ? 'user__form--google' : 'user__form--facebook';
  return (
    <button type="button" className={iconClass}>
      {icon}
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
