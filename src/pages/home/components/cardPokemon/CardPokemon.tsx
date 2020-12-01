import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import api from 'api/api';

import useStyles from './CardPokemon.styles';

import CharmanderIcon from '../assets/pokemonAsset/PokemonIcon';

interface Props {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
}

const CardPokemon = () => {
  // TODO... function is been called a lot of times for some reason... even if I call
  // it just one time
  const { container, textStyle } = useStyles();
  const [pokemons, setPokemons] = useState<Props[]>([]);

  async function addPokemonInList(id: number): Promise<void> {
    if (pokemons.length < 1) {
      const response = await api.get<Props>(`/pokemon/${id}`);
      setPokemons([...pokemons, response.data]);
    }
  }

  //addPokemonInList(445);

  pokemons.forEach(it => {
    console.log(it.name);
  });

  return (
    <>
      {pokemons.forEach(it => {
        <Grid container item xs={3} spacing={3} className={container}>
          <Paper elevation={1} className={textStyle}>
            <Typography>Peso: {it.weight}kg</Typography>
            <CharmanderIcon src={it.sprites.front_default} />
          </Paper>
        </Grid>;
      })}
    </>
  );
};

export default CardPokemon;
