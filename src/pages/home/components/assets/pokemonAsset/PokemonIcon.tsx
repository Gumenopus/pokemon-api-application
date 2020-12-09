/* eslint-disable */
import React from 'react';
import useStyles from './PokemonIcon.styles';

interface Props {
  src: string;
  onClick: Function;
}

const PokemonIcon = ({ src, onClick }: Props) => {
  const { container } = useStyles();
  return (
    <img
      onClick={() => onClick()}
      alt="pokemon"
      src={src}
      className={container}
    />
  );
};

export default PokemonIcon;
