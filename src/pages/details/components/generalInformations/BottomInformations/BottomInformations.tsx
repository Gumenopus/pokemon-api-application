/* eslint-disable */
import React from 'react';
import { SpecificPokemon } from 'types/Cards.types';
import EnergyIcon from '../pokemonAttacks/energyIcon/EnergyIcon';
import useStyles from './BottomInformations.styles';

interface PokemonProps {
  pokemon?: SpecificPokemon;
}

const BottomInformations = ({ pokemon }: PokemonProps) => {
  const {
    container,
    weaknessContainer,
    resistanceContainer,
    retreatCostContainer,
    retreatCostIcons,
    titleFont,
    valueFont,
  } = useStyles();
  return (
    <React.Fragment>
      <div className={container}>
        <div className={weaknessContainer}>
          <h1 className={titleFont}>Weakness</h1>
          <h1 className={valueFont}>2x</h1>
        </div>
        <div className={resistanceContainer}>
          <h1 className={titleFont}>Resistance</h1>
          <h1 className={valueFont}>2x</h1>
        </div>
        <div className={retreatCostContainer}>
          <h1 className={titleFont}>Retreat Cost</h1>
          <div className={retreatCostIcons}>
            {pokemon?.card.retreatCost ? (
              pokemon.card.retreatCost.map(energy => (
                <EnergyIcon energyColor={energy} />
              ))
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BottomInformations;
