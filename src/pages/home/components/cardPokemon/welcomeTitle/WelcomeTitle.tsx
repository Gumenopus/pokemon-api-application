import React from 'react';
import useStyles from './WelcomeTitle.styles';

import TITLE_HOME_IMAGE from '../../../constants/Constants';

const WelcomeTitle = () => {
  const { textTitleContainer, imageContainer, divContainerTitle } = useStyles();

  return (
    <div className={divContainerTitle}>
      <h1 className={textTitleContainer}>Welcome to the Cards Manager!</h1>
      <img alt="pokémon" className={imageContainer} src={TITLE_HOME_IMAGE} />
    </div>
  );
};

export default WelcomeTitle;
