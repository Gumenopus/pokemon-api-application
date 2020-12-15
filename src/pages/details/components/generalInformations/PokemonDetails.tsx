import React from 'react';

import useStyles from './PokemonDetails.styles';

const PokemonDetails = () => {
  const { divTitle } = useStyles();

  return (
    <div className={divTitle}>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default PokemonDetails;
