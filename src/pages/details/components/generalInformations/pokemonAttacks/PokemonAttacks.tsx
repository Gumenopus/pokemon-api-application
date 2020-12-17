/* eslint-disable */
import React from 'react';

import useStyles from './PokemonAttacks.styles';

const PokemonAttack = () => {
  const { container, pokemonFirstAttack, pokemonSecondAttack } = useStyles();
  return (
    <React.Fragment>
      <div className={container}>
        <h1 className={pokemonFirstAttack}>a</h1>
        <h1 className={pokemonSecondAttack}>b</h1>
      </div>
    </React.Fragment>
  );
};

export default PokemonAttack;
