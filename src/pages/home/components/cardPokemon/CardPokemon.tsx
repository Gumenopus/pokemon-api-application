import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from './CardPokemon.styles';
import CharmanderIcon from '../assets/pokemonAsset/PokemonIcon';

const CardPokemon = () => {
  const { container, textStyle } = useStyles();
  return (
    <Grid container item xs={3} spacing={3} className={container}>
      <Paper elevation={1} className={textStyle}>
        This is my paper text!
        <CharmanderIcon />
      </Paper>
    </Grid>
  );
};

export default CardPokemon;
