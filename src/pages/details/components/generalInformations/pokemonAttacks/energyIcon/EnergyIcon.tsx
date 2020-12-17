import React from 'react';

import useStyle from './EnergyIcon.styles';

interface Src {
  src: string;
}

const EnergyIcon = ({ src }: Src) => {
  const { imageProps } = useStyle();
  return <img alt="energy" className={imageProps} src={src} />;
};

export default EnergyIcon;
