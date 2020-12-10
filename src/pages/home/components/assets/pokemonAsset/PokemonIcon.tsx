/* eslint-disable */
import React from 'react';
import useStyles from './PokemonIcon.styles';

interface Props {
  src: string;
  onClick: Function;
}

const PokemonIcon = ({ src, onClick }: Props) => {
  const { container, image } = useStyles();
  return (
    <div className={container}>
      <img
        onClick={() => onClick()}
        alt="pokemon"
        src={src}
        className={image}
      />
    </div>
  );
};

export default PokemonIcon;
