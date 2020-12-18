/* eslint-disable */
import React from 'react';
import { Abilities } from 'types/Cards.types';

import useStyles from './AbilityIcon.styles';

import {
  DEFAULT_ABILITY_ICON,
  POKE_BODY__ICON,
  POKE_POWER_ICON,
} from '../.././../../constants/Constants';

interface AbilityProp {
  ability?: Abilities;
}

class Ability {
  type: string;
  url: string;
  constructor(type: string, url: string) {
    this.type = type;
    this.url = url;
  }
}

const AbilityIcon = ({ ability }: AbilityProp) => {
  const { imageProps } = useStyles();
  const listOfAbilities = new Array<Ability>();

  addAllAbilitiesInArray(listOfAbilities);
  for (let i = 0; i < listOfAbilities.length; i++) {
    if (ability?.type === listOfAbilities[i].type) {
      return (
        <img
          alt="ability icon"
          src={listOfAbilities[i].url}
          className={imageProps}
        />
      );
    }
  }
  return <img alt="default icon" />;
};

function addAllAbilitiesInArray(list: Array<Ability>) {
  let ability = new Ability('Ability', DEFAULT_ABILITY_ICON);
  list.push(ability);

  let pokeBody = new Ability('Poké-Body', POKE_BODY__ICON);
  list.push(pokeBody);

  let pokePower = new Ability('Poké-Power', POKE_POWER_ICON);
  list.push(pokePower);
}

export default AbilityIcon;
