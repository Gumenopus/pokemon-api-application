/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import api from 'api/api';

import useStyles from './CardPokemon.styles';

import PokemonIcon from '../assets/pokemonAsset/PokemonIcon';
import { Link } from 'react-router-dom';
import { createNamedExports, JSDocCallbackTag } from 'typescript';
import Box from '@material-ui/core/Box';
import Pokemon from 'model/Pokemon';

interface Props {
  results: [
    {
      name: string;
      url: string;
    },
  ];
}

const CardPokemon = () => {
  const { container, textStyle } = useStyles();
  const [pokemons, setPokemons] = useState<Props>();

  async function addAllPokemonsInList(
    quantityOfPokemons: number,
  ): Promise<void> {
    const response = await api.get<Props>(
      `/pokemon/?limit=${quantityOfPokemons}&offset=0`,
    );
    setPokemons(response.data);
  }

  useEffect(() => {
    addAllPokemonsInList(500);
  }, []);

  function sendPokemonIdToHistory(id: number) {
    // When user clicks on it, will send to another screen the id value. Path will need to change with id value.
    <Link
      to={{
        pathname: `/details/${id}`,
        state: `${id}`,
      }}
    ></Link>;
  }

  const list = [];

  list.push('aaa');
  list.push('bbb');

  return (
    <Fragment>
      {pokemons?.results.map(pokemon => (
        <Grid className={container}>
          <Paper elevation={1} className={textStyle}>
            <Typography>Name: {pokemon.name}</Typography>
            <PokemonIcon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"></PokemonIcon>
          </Paper>
        </Grid>
      ))}
    </Fragment>
  );
};

export default CardPokemon;
