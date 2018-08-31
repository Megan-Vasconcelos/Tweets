import React from 'react';
import Buttons from './Buttons';

const ButtonOptions = () => (
    <div className="home-page">
    <div className="button-box">
      <Buttons username="realDonaldTrump" />
      <Buttons username="HillaryClinton" />
    </div>
    <div>
      <h2>Pick the lesser of 2 evils...</h2>
    </div>
  </div>
)

export default ButtonOptions;