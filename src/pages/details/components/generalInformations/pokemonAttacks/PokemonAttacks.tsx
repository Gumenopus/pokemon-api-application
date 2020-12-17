/* eslint-disable */
import React from 'react';

import { SpecificPokemon } from 'types/Cards.types';

import useStyles from './PokemonAttacks.styles';

interface Pokemon {
  pokemon?: SpecificPokemon;
}

const PokemonAttack = ({ pokemon }: Pokemon) => {
  const { container, pokemonAttack } = useStyles();
  return (
    <React.Fragment>
      <div className={container}>
        {pokemon?.card.attacks.map(attack => (
          <h1 className={pokemonAttack}>{attack.name}</h1>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PokemonAttack;
