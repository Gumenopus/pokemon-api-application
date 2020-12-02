/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import api from 'api/api';

import useStyles from './CardPokemon.styles';

import PokemonIcon from '../assets/pokemonAsset/PokemonIcon';
import { Link } from 'react-router-dom';
import { createNamedExports, JSDocCallbackTag, ListFormat } from 'typescript';
import Box from '@material-ui/core/Box';
import Pokemon from 'model/Pokemon';

interface Props {
  cards: [
    {
      name: string;
      imageUrl: string;
    },
  ];
}

const CardPokemon = () => {
  const { container, textStyle, divContainer } = useStyles();
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
          <Grid container spacing={2} item xs={4} className={container}>
            <Paper elevation={1} className={textStyle}>
              <Typography>Name: {card.name}</Typography>
              <PokemonIcon src={card.imageUrl}></PokemonIcon>
            </Paper>
          </Grid>
        ))}
      </Fragment>
    </div>
  );
};

export default CardPokemon;
