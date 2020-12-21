import React from 'react';
import { SpecificPokemon } from 'types/Cards.types';

import useStyles from './TrainerText.styles';

interface TrainerProps {
  card?: SpecificPokemon;
}

const TrainerText = ({ card }: TrainerProps) => {
  const {
    container,
    containerRulesTrainer,
    textRulesFont,
    textFont,
  } = useStyles();
  return (
    <div className={container}>
      <div className={containerRulesTrainer}>
        <h1 className={textRulesFont}>Rules</h1>
      </div>
      <h1 className={textFont}>{card?.card.text}</h1>
    </div>
  );
};

export default TrainerText;
