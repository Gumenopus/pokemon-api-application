/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import api from 'api/api';

import useStyles from './CardPokemon.styles';

import PokemonIcon from '../assets/pokemonAsset/PokemonIcon';
import { Link } from 'react-router-dom';
import { createNamedExports } from 'typescript';

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
    addAllPokemonsInList(100);
  }, []);

  console.log(pokemons);

  function sendPokemonIdToHistory(id: number) {
    // When user clicks on it, will send to another screen the id value. Path will need to change with id value.
    <Link
      to={{
        pathname: `/details/${id}`,
        state: `${id}`,
      }}
    ></Link>;
  }

  return (
    <Fragment>
      {/* {pokemons.forEach(it => { */}
      <Grid container item xs={3} spacing={3} className={container}>
        <Paper
          //onClick={() => sendPokemonIdToHistory(it.id)}
          elevation={1}
          className={textStyle}
        >
          <Typography>Peso: ? kg</Typography>
          <PokemonIcon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" />
        </Paper>
      </Grid>
      {/* })} */}
    </Fragment>
  );
};

export default CardPokemon;
