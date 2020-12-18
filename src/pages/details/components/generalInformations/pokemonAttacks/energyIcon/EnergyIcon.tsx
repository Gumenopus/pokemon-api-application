/* eslint-disable */
import React from 'react';

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
  {
    /* I tried use .map and .forEach, but just the convencional for worked. */
  }
  for (let i = 0; i < listOfEnergies.length; i++) {
    if (energyColor === listOfEnergies[i].name) {
      return (
        <img className={imageProps} alt="" src={listOfEnergies[i].url}></img>
      );
    }
  }
  return <img alt=""></img>;
};

function addAllEnergiesInArray(list: Array<Energy>) {
  let grass = new Energy(
    'Grass',
    'https://cdn.bulbagarden.net/upload/thumb/2/2e/Grass-attack.png/20px-Grass-attack.png',
  );
  let fire = new Energy(
    'Fire',
    'https://cdn.bulbagarden.net/upload/thumb/a/ad/Fire-attack.png/20px-Fire-attack.png',
  );
  let water = new Energy(
    'Water',
    'https://cdn.bulbagarden.net/upload/thumb/1/11/Water-attack.png/20px-Water-attack.png',
  );
  let lightning = new Energy(
    'Lightning',
    'https://cdn.bulbagarden.net/upload/thumb/0/04/Lightning-attack.png/20px-Lightning-attack.png',
  );
  let fighting = new Energy(
    'Fighting',
    'https://cdn.bulbagarden.net/upload/thumb/4/48/Fighting-attack.png/20px-Fighting-attack.png',
  );
  let psychic = new Energy(
    'Psychic',
    'https://cdn.bulbagarden.net/upload/thumb/e/ef/Psychic-attack.png/20px-Psychic-attack.png',
  );
  let colorless = new Energy(
    'Colorless',
    'https://cdn.bulbagarden.net/upload/thumb/1/1d/Colorless-attack.png/20px-Colorless-attack.png',
  );
  let darkness = new Energy(
    'Darkness',
    'https://cdn.bulbagarden.net/upload/thumb/a/ab/Darkness-attack.png/20px-Darkness-attack.png',
  );
  let metal = new Energy(
    'Metal',
    'https://cdn.bulbagarden.net/upload/thumb/6/64/Metal-attack.png/20px-Metal-attack.png',
  );
  let dragon = new Energy(
    'Dragon',
    'https://cdn.bulbagarden.net/upload/thumb/8/8a/Dragon-attack.png/20px-Dragon-attack.png',
  );
  let fairy = new Energy(
    'Fairy',
    'https://cdn.bulbagarden.net/upload/thumb/4/40/Fairy-attack.png/20px-Fairy-attack.png',
  );

  list.push(grass);
  list.push(fire);
  list.push(water);
  list.push(lightning);
  list.push(fighting);
  list.push(psychic);
  list.push(colorless);
  list.push(darkness);
  list.push(metal);
  list.push(dragon);
  list.push(fairy);
}

export default EnergyIcon;
