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
      {pokemons?.cards.map(card => (
        <Grid key={card.imageUrl} className={container}>
          <PokemonIcon src={card.imageUrl}></PokemonIcon>
        </Grid>
      ))}
    </div>
  );
};

export default CardPokemon;
