import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import api from 'api/api';

import Props from 'pages/home/types/Pokemon.type';

import useStyles from './CardPokemon.styles';
import CharmanderIcon from '../assets/pokemonAsset/PokemonIcon';

const CardPokemon = () => {
  const { container, textStyle } = useStyles();
  const [id, setId] = useState(0);

  async function getPokemonInformations(pokemon: string): Promise<void> {
    const response = await api.get<Props>(`/pokemon/${pokemon}`);
    setId(response.data.id);
  }

  getPokemonInformations('charmander');

  return (
    <Grid container item xs={3} spacing={3} className={container}>
      <Paper elevation={1} className={textStyle}>
        {id}
        <CharmanderIcon />
      </Paper>
    </Grid>
  );
};

export default CardPokemon;
