/* eslint-disable */
import React from 'react';

import { SpecificPokemon } from 'types/Cards.types';

import useStyles from './PokemonMainInformations.styles';

interface Pokemon {
  pokemon?: SpecificPokemon;
}

const PokemonName = ({ pokemon }: Pokemon) => {
  const {
    containerFirstInformations,
    pokemonName,
    pokemonSupertype,
    pokemonSubtype,
    pokemonHP,
  } = useStyles();
  return (
    <React.Fragment>
      <div className={containerFirstInformations}>
        <h1 className={pokemonName}>{pokemon?.card.name}</h1>
        <h1 className={pokemonSupertype}>{pokemon?.card.supertype} - </h1>
        <h1 className={pokemonSubtype}>{pokemon?.card.subtype}</h1>
        <h1 className={pokemonHP}>HP {pokemon?.card.hp}</h1>
        {/* TODO: image tag to pokémon type */}
      </div>
    </React.Fragment>
  );
};

export default PokemonName;
