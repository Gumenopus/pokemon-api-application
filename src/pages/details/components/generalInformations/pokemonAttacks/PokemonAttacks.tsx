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
    pokemonAttackDamage,
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
            <AbilityIcon ability={ability} />
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
            <h1 className={pokemonAttackDamage}>70</h1>
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
