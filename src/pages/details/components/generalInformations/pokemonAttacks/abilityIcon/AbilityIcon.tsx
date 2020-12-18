import React from 'react';

import useStyles from './AbilityIcon.styles';

interface Src {
  src: string;
}

const AbilityIcon = ({ src }: Src) => {
  const { imageProps } = useStyles();
  return <img alt="ability image" src={src} className={imageProps}></img>;
};

export default AbilityIcon;
