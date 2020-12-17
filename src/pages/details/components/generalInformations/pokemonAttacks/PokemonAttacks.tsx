/* eslint-disable */
import React from 'react';

import { Attacks } from '../../../../../types/Cards.types';

import useStyles from './PokemonAttacks.styles';

interface SpecificAttack {
  attack?: Array<Attacks>;
}

const PokemonAttack = ({ attack }: SpecificAttack) => {
  const {
    container,
    containerDivSpace,
    pokemonAttackName,
    pokemonAttackText,
  } = useStyles();
  return (
    <React.Fragment>
      <div className={container}>
        {attack?.map(attack => (
          <React.Fragment>
            <h1 className={pokemonAttackName}>{attack.name}</h1>
            <h1 className={pokemonAttackText}>{attack.text}</h1>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PokemonAttack;
