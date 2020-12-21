/* eslint-disable */
import React from 'react';

import {
  ENERGY_COLORLESS,
  ENERGY_DARKNESS,
  ENERGY_DRAGON,
  ENERGY_FIGHTING,
  ENERGY_FIRE,
  ENERGY_GRASS,
  ENERGY_LIGHTINING,
  ENERGY_METAL,
  ENERGY_PSYCHIC,
  ENERGY_WATER,
} from 'pages/details/constants/Constants';

import useStyle from './EnergyIcon.styles';

interface Src {
  energyColor?: String;
}

class Energy {
  name: string;
  url: string;
  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}

const EnergyIcon = ({ energyColor }: Src) => {
  const { imageProps } = useStyle();
  const listOfEnergies = new Array<Energy>();

  addAllEnergiesInArray(listOfEnergies);

  for (let i = 0; i < listOfEnergies.length; i++) {
    if (energyColor === listOfEnergies[i].name) {
      return <img className={imageProps} alt="" src={listOfEnergies[i].url} />;
    }
  }
  return <img alt=""></img>;
};

function addAllEnergiesInArray(list: Array<Energy>) {
  let grass = new Energy('Grass', ENERGY_GRASS);
  list.push(grass);

  let fire = new Energy('Fire', ENERGY_FIRE);
  list.push(fire);

  let water = new Energy('Water', ENERGY_WATER);
  list.push(water);

  let lightning = new Energy('Lightning', ENERGY_LIGHTINING);
  list.push(lightning);

  let fighting = new Energy('Fighting', ENERGY_FIGHTING);
  list.push(fighting);

  let psychic = new Energy('Psychic', ENERGY_PSYCHIC);
  list.push(psychic);

  let colorless = new Energy('Colorless', ENERGY_COLORLESS);
  list.push(colorless);

  let darkness = new Energy('Darkness', ENERGY_DARKNESS);
  list.push(darkness);

  let metal = new Energy('Metal', ENERGY_METAL);
  list.push(metal);

  let dragon = new Energy('Dragon', ENERGY_DRAGON);
  list.push(dragon);

  let fairy = new Energy('Fairy', ENERGY_FIRE);
  list.push(fairy);
}

export default EnergyIcon;
