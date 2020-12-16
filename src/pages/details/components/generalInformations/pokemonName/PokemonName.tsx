import React from 'react';

import useStyles from './PokemonName.styles';

const PokemonName = () => {
  const { textStyle } = useStyles();
  return <h1 className={textStyle}>Charizard - Pokémon V</h1>;
};

export default PokemonName;
