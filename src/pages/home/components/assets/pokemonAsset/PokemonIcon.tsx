import React from 'react';
import useStyles from './PokemonIcon.styles';

interface Props {
  src: string;
}

const PokemonIcon = ({ src }: Props) => {
  const { container } = useStyles();
  return <img alt="pokemon" src={src} className={container} />;
};

export default PokemonIcon;
