/* eslint-disable */
import Divider from '@material-ui/core/Divider';
import { DEFAULT_INDEX_VALUE } from 'pages/details/constants/Constants';
import React from 'react';
import { SpecificPokemon } from 'types/Cards.types';
import EnergyIcon from '../../EnergyIcon/EnergyIcon';
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
    artistContainer,
    retreatCostIcons,
    titleFont,
    valueFont,
  } = useStyles();
  return (
    <React.Fragment>
      <div className={container}>
        <div className={weaknessContainer}>
          <h1 className={titleFont}>Weakness</h1>
          {pokemon?.card.weaknesses ? (
            <h1 className={valueFont}>
              <EnergyIcon
                energyColor={pokemon?.card.weaknesses[DEFAULT_INDEX_VALUE].type}
              />
              {pokemon?.card.weaknesses[DEFAULT_INDEX_VALUE].value}
            </h1>
          ) : (
            <h1 className={valueFont}>N/A</h1>
          )}
        </div>
        <div className={resistanceContainer}>
          <h1 className={titleFont}>Resistance</h1>
          {pokemon?.card.resistances ? (
            <h1 className={valueFont}>
              <EnergyIcon
                energyColor={
                  pokemon?.card.resistances[DEFAULT_INDEX_VALUE].type
                }
              />
              {pokemon?.card.resistances[DEFAULT_INDEX_VALUE].value}
            </h1>
          ) : (
            <h1 className={valueFont}>N/A</h1>
          )}
        </div>
        <div className={retreatCostContainer}>
          <h1 className={titleFont}>Retreat Cost</h1>
          <div className={retreatCostIcons}>
            {pokemon?.card.retreatCost ? (
              pokemon.card.retreatCost.map(energy => (
                <EnergyIcon energyColor={energy} />
              ))
            ) : (
              <h1 className={valueFont}>N/A</h1>
            )}
          </div>
        </div>
      </div>
      <Divider variant="middle" />
      <div className={container}>
        <div className={artistContainer}>
          <h1 className={titleFont}>Artist</h1>
          {pokemon?.card.artist ? (
            <h1 className={valueFont}>{pokemon?.card.artist}</h1>
          ) : (
            <h1 className={valueFont}>N/A</h1>
          )}
        </div>
        <div className={artistContainer}>
          <h1 className={titleFont}>Rarity</h1>
          {pokemon?.card.rarity ? (
            <h1 className={valueFont}>{pokemon?.card.rarity}</h1>
          ) : (
            <h1 className={valueFont}>N/A</h1>
          )}
        </div>
        <div className={artistContainer}>
          <h1 className={titleFont}>Set</h1>
          {pokemon?.card.set ? (
            <h1 className={valueFont}>{pokemon?.card.set}</h1>
          ) : (
            <h1 className={valueFont}>N/A</h1>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BottomInformations;
