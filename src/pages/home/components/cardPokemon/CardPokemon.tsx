/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';

import api from 'service/api';

import useStylesCardPokemon from './CardPokemon.styles';
import useStylesButton from './searchButton/SearchButton.styles';
import useStylesTextField from './searchTextField/SearchTextField.styles';

import WelcomeTitle from './welcomeTitle/WelcomeTitle';
import PokemonList from './pokemonList/PokemonList';

import SearchIcon from '@material-ui/icons/Search';

import Cards from '../types/Cards.types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const CardPokemon = () => {
  const { divContainerList, divContainerTextField } = useStylesCardPokemon();
  const { buttonSearchContainer } = useStylesButton();
  const { textFieldContainer } = useStylesTextField();

  const [pokemons, setPokemons] = useState<Cards>();
  const [pokemon, setPokemon] = useState('');

  async function addAllPokemonsInList(): Promise<void> {
    const response = await api.get<Cards>('/cards');
    setPokemons(response.data);
  }

  async function searchForCard(): Promise<void> {
    const response = await api.get<Cards>(`cards?name=${pokemon}`);
    setPokemons(response.data);
  }

  useEffect(() => {
    addAllPokemonsInList();
  }, []);

  return (
    <Fragment>
      <WelcomeTitle />

      <div className={divContainerTextField}>
        {/* Question: how I can separate this HTML tags if I need to use methods which are in this file? */}
        <TextField
          variant="outlined"
          className={textFieldContainer}
          placeholder="Search for a pokémon card"
          onChange={it => setPokemon(it.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#9F9F9F' }} />
              </InputAdornment>
            ),
          }}
        />

        <Button
          className={buttonSearchContainer}
          variant="contained"
          color="primary"
          onClick={() => searchForCard()}
        >
          Search
        </Button>
      </div>

      <div className={divContainerList}>
        <PokemonList cards={pokemons?.cards} />
      </div>
    </Fragment>
  );
};

export default CardPokemon;
