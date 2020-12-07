/* eslint-disable */
import React, { Fragment, Key, useEffect, useState } from 'react';

import api from 'service/api';

import useStylesCardPokemon from './CardPokemon.styles';

import WelcomeTitle from './welcomeTitle/WelcomeTitle';
import PokemonList from './pokemonList/PokemonList';
import SearchTextField from './searchTextField/SearchTextField';

import Cards from '../types/Cards.types';

const CardPokemon = () => {
  const { divContainerList, divContainerTextField } = useStylesCardPokemon();

  const [pokemons, setPokemons] = useState<Cards>();
  const [pokemon, setPokemon] = useState('');

  async function addAllPokemonsInList(): Promise<void> {
    const response = await api.get<Cards>('/cards');
    setPokemons(response.data);
  }

  async function searchForCard(): Promise<void> {
    try {
      const response = await api.get<Cards>(`cards?name=${pokemon}`);
      setPokemons(response.data);
    } catch (err) {
      console.log('An error occurred trying call the API');
    }
  }

  useEffect(() => {
    addAllPokemonsInList();
  }, []);

  return (
    <Fragment>
      <WelcomeTitle />

      <div className={divContainerTextField}>
        <SearchTextField
          onEnterPressedEvent={searchForCard}
          setPokemon={setPokemon}
        />
      </div>

      <div className={divContainerList}>
        <PokemonList cards={pokemons?.cards} />
      </div>
    </Fragment>
  );
};

export default CardPokemon;
