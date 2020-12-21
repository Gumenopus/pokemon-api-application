/* eslint-disable */
import React from 'react';

import { SpecificPokemon } from 'types/Cards.types';
import EnergyIcon from '../pokemonAttacks/energyIcon/EnergyIcon';

import useStyles from './PokemonMainInformations.styles';
import { DEFAULT_INDEX_VALUE } from '../../../constants/Constants';

interface Pokemon {
  pokemon?: SpecificPokemon;
}

const PokemonName = ({ pokemon }: Pokemon) => {
  const {
    containerFirstInformations,
    containerSupertype,
    containerHP,
    pokemonName,
    pokemonSupertype,
    pokemonSubtype,
    pokemonHP,
  } = useStyles();
  return (
    <React.Fragment>
      <div className={containerFirstInformations}>
        <h1 className={pokemonName}>{pokemon?.card.name}</h1>
        <div className={containerSupertype}>
          <h1 className={pokemonSupertype}>{pokemon?.card.supertype} - </h1>
          <h1 className={pokemonSubtype}> {pokemon?.card.subtype}</h1>
        </div>
        <div className={containerHP}>
          <h1 className={pokemonHP}>HP {pokemon?.card.hp}</h1>
          <EnergyIcon energyColor={pokemon?.card.types[DEFAULT_INDEX_VALUE]} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonName;
