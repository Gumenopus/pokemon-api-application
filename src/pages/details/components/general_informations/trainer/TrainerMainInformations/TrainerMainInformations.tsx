/* eslint-disable */
import React from 'react';

import { SpecificPokemon } from 'types/Cards.types';
import useStyles from './TrainerMainInformations.styles';

interface TrainerProps {
  card?: SpecificPokemon;
}

const TrainerMainInformations = ({ card }: TrainerProps) => {
  const {
    containerFirstInformations,
    containerSupertype,
    trainerName,
    trainerSupertype,
    trainerSubtype,
  } = useStyles();

  return (
    <React.Fragment>
      <div className={containerFirstInformations}>
        <h1 className={trainerName}>{card?.card.name}</h1>
        <div className={containerSupertype}>
          <h1 className={trainerSupertype}>{card?.card.supertype}</h1>
          <h1 className={trainerSubtype}> - {card?.card.subtype}</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrainerMainInformations;
