/* eslint-disable */
import React from 'react';

import { Abilities, Attacks } from '../../../../../types/Cards.types';
import AbilityIcon from './abilityIcon/AbilityIcon';
import EnergyIcon from './energyIcon/EnergyIcon';

import useStyles from './PokemonAttacks.styles';

interface SpecificAttack {
  attacks?: Array<Attacks>;
  ability?: Abilities;
}

const PokemonAttack = ({ attacks, ability }: SpecificAttack) => {
  const {
    container,
    containerPokemonAttack,
    containerPokemonAbility,
    pokemonAttackName,
    pokemonAttackText,
    pokemonAbilityName,
    pokemonAbilityText,
  } = useStyles();
  return (
    <div className={container}>
      {/* TODO: abstract ability and attacks tags? */}
      {/* Ability */}
      {ability ? (
        <React.Fragment>
          <div className={containerPokemonAbility}>
            <AbilityIcon src="data:image/png;base64,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" />
            <h1 className={pokemonAbilityName}>{ability?.name}</h1>
          </div>
          <h1 className={pokemonAbilityText}>{ability?.text}</h1>
        </React.Fragment>
      ) : (
        <React.Fragment />
      )}
      {/* Attacks */}
      {attacks?.map((attacks, index) => (
        <React.Fragment>
          <div className={containerPokemonAttack}>
            {/* TODO: put a key in each chield, if condition for set energy type. */}
            {attacks.cost.map(energy => (
              <EnergyIcon energyColor={energy} />
            ))}
            <h1 key={index} className={pokemonAttackName}>
              {attacks.name}
            </h1>
          </div>
          {attacks.text ? (
            <h1 key={index} className={pokemonAttackText}>
              {attacks.text}
            </h1>
          ) : (
            <div></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PokemonAttack;
