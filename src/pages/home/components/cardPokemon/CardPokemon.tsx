import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import api from 'api/api';

import Props from 'pages/home/types/Pokemon.type';

import useStyles from './CardPokemon.styles';
import CharmanderIcon from '../assets/pokemonAsset/PokemonIcon';

const CardPokemon = () => {
  const { container, textStyle } = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState('');
  const [height, setHeight] = useState(0);

  async function getPokemonInformations(pokemon: string): Promise<void> {
    const response = await api.get<Props>(`/pokemon/${pokemon}`);

    setId(response.data.id);
    setHeight(response.data.height);
    setImage(response.data.sprites.front_default);
  }

  getPokemonInformations('ditto');

  return (
    <Grid container item xs={3} spacing={3} className={container}>
      <Paper elevation={1} className={textStyle}>
        <Typography>Peso: {height}kg</Typography>
        <CharmanderIcon src={image} />
      </Paper>
    </Grid>
  );
};

export default CardPokemon;
