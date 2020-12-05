/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';

import api from 'service/api';

import useStylesCardPokemon from './CardPokemon.styles';
import useStylesTitle from './welcomeTitle/WelcomeTitle.styles';

import WelcomeTitle from './welcomeTitle/WelcomeTitle';
import SearchTextField from './searchTextField/SearchTextField';
import SearchButton from './searchButton/SearchButton';
import PokemonList from './pokemonList/PokemonList';

import Card from '../types/Card.types';

const CardPokemon = () => {
  const { divContainerList, divContainerTextField } = useStylesCardPokemon();

  const [pokemons, setPokemons] = useState<Card>();

  async function addAllPokemonsInList(): Promise<void> {
    const response = await api.get<Card>('/cards');
    setPokemons(response.data);
  }

  useEffect(() => {
    addAllPokemonsInList();
  }, []);

  return (
    <Fragment>
      <WelcomeTitle />

      <div className={divContainerTextField}>
        <SearchTextField />
        <SearchButton />
      </div>

      <div className={divContainerList}>
        <PokemonList cards={pokemons?.cards} />
      </div>
    </Fragment>
  );
};

export default CardPokemon;
