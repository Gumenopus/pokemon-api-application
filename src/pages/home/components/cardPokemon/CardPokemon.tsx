/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import api from 'api/api';

import useStyles from './CardPokemon.styles';

import PokemonIcon from '../assets/pokemonAsset/PokemonIcon';

interface Props {
  cards: [
    {
      name: string;
      imageUrl: string;
    },
  ];
}

const CardPokemon = () => {
  const { container, divContainer } = useStyles();
  const [pokemons, setPokemons] = useState<Props>();

  async function addAllPokemonsInList(): Promise<void> {
    const response = await api.get<Props>('/cards');
    setPokemons(response.data);
  }

  useEffect(() => {
    addAllPokemonsInList();
  }, []);

  return (
    <div className={divContainer}>
      <Fragment>
        {pokemons?.cards.map(card => (
          <Grid
            key={card.imageUrl}
            container
            spacing={2}
            item
            xs={4}
            className={container}
          >
            <PokemonIcon
              src={card.imageUrl}
              mouseEnterMessage="Hey, I'm in!"
              mouseOutMessage="Hey, I'm out!"
            ></PokemonIcon>
          </Grid>
        ))}
      </Fragment>
    </div>
  );
};

export default CardPokemon;
