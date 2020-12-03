/* eslint-disable */
import React from 'react';
import useStyles from './PokemonIcon.styles';

interface Props {
  src: string;
  mouseEnterMessage?: string;
  mouseOutMessage?: string;
}

const PokemonIcon = ({ src, mouseEnterMessage, mouseOutMessage }: Props) => {
  const { container } = useStyles();
  return (
    <img
      onMouseEnter={() =>
        console.log(
          mouseEnterMessage ? mouseEnterMessage : 'Without enter paramter!',
        )
      }
      onMouseLeave={() =>
        console.log(
          mouseOutMessage ? mouseOutMessage : 'Without leave parameter!',
        )
      }
      alt="charmander"
      src={src}
      className={container}
    />
  );
};

export default PokemonIcon;
