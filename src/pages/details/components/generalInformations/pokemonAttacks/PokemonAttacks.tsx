/* eslint-disable */
import React from 'react';

import { Attacks } from '../../../../../types/Cards.types';
import EnergyIcon from './energyIcon/EnergyIcon';

import useStyles from './PokemonAttacks.styles';

interface SpecificAttack {
  attacks?: Array<Attacks>;
}

const PokemonAttack = ({ attacks }: SpecificAttack) => {
  const {
    container,
    pokemonAttackName,
    containerPokemonAttack,
    pokemonAttackText,
  } = useStyles();
  return (
    <React.Fragment>
      <div className={container}>
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
    </React.Fragment>
  );
};

export default PokemonAttack;
