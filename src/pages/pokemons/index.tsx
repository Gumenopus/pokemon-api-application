import React, { FormEvent, useState } from 'react';
import { api } from '../../api/api';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Props } from './types';

const useStyles = makeStyles({
  paperPokemonContainer: {
    paddingTop: '20px',
    paddingBottom: '20px',

    textAlign: 'center',
  },
});

export const getPokemonInformations = (pokemon: Props) => {
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <Grid item xs={3}>
      <Paper elevation={1} variant={'elevation'}>
        <img src={pokemonImage}></img>
        {pokemon.name}
      </Paper>
    </Grid>
  );
};

const Pokemons: React.FC = () => {
  const classes = useStyles();

  const [pokemon, setPokemon] = useState<Props>();
  const [pokemons, setPokemons] = useState<Props[]>([]);

  async function getSpecificPokemon(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      //TODO...
    } catch (err) {
      console.log('An error occurred in API ' + err);
    }
  }

  async function getAllPokemons(): Promise<void> {
    try {
      const apiResponse = await api.get(`/pokemon/1`);

      setPokemons(apiResponse.data);
    } catch (err) {
      console.log('An error occurred ' + err);
    }
  }

  return (
    <Grid container spacing={3} className={classes.paperPokemonContainer}>
      {/* {getAllPokemons()}  */}
    </Grid>
  );
};

export default Pokemons;
