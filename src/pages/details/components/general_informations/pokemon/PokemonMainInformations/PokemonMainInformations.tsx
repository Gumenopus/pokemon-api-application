/* eslint-disable */
import React from 'react';

import { SpecificPokemon } from 'types/Cards.types';
import EnergyIcon from '../../EnergyIcon/EnergyIcon';

import useStyles from './PokemonMainInformations.styles';
import { DEFAULT_INDEX_VALUE } from '../../../../constants/Constants';

interface Pokemon {
  card?: SpecificPokemon;
}

const PokemonName = ({ card }: Pokemon) => {
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
        <h1 className={pokemonName}>{card?.card.name}</h1>
        <div className={containerSupertype}>
          <h1 className={pokemonSupertype}>{card?.card.supertype} - </h1>
          <h1 className={pokemonSubtype}> {card?.card.subtype}</h1>
        </div>
        <div className={containerHP}>
          <h1 className={pokemonHP}>HP {card?.card.hp}</h1>
          <EnergyIcon energyColor={card?.card.types[DEFAULT_INDEX_VALUE]} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonName;
