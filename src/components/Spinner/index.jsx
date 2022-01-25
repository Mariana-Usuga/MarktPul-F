import React from 'react';

const Spinner = () => {
  console.log('working');
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">Loading...</div>
    </div>
  );
};

export default Spinner;
