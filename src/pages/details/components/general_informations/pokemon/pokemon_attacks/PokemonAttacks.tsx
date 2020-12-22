/* eslint-disable */
import React from 'react';

import { Abilities, Attacks } from '../../../../../../types/Cards.types';
import AbilityIcon from './AbilityIcon/AbilityIcon';
import EnergyIcon from '../../EnergyIcon/EnergyIcon';

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
            {attacks.cost.map(energy => (
              <EnergyIcon energyColor={energy} />
            ))}
            <h1 key={index} className={pokemonAttackName}>
              {attacks.name}
            </h1>
            <h1 className={pokemonAttackDamage}>{attacks.damage}</h1>
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
