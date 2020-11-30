import React from 'react';
import useStyles from './PokemonIcon.styles';

interface Props {
  src: string;
}

const CharmanderIcon = ({ src }: Props) => {
  const { container } = useStyles();
  return <img alt="charmander" src={src} className={container} />;
};

export default CharmanderIcon;
