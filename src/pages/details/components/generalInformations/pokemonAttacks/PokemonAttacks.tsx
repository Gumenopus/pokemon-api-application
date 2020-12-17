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
    containerDivSpace,
    pokemonAttackName,
    containerPokemonAttack,
    pokemonAttackText,
  } = useStyles();
  return (
    <React.Fragment>
      <div className={container}>
        {attacks?.map(attacks => (
          <React.Fragment>
            <div className={containerPokemonAttack}>
              {/* TODO: .map for <EnergyIcon/> */}
              <EnergyIcon src="https://cdn.bulbagarden.net/upload/thumb/1/1d/Colorless-attack.png/20px-Colorless-attack.png" />
              <h1 className={pokemonAttackName}>{attacks.name}</h1>
            </div>
            {attacks.text ? (
              <h1 className={pokemonAttackText}>{attacks.text}</h1>
            ) : (
              <div className={containerDivSpace}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PokemonAttack;
