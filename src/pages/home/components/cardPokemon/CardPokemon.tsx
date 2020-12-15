/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';

import api from 'service/api';

import useStylesCardPokemon from './CardPokemon.styles';

import WelcomeTitle from './welcomeTitle/WelcomeTitle';
import PokemonList from './pokemonList/PokemonList';
import SearchTextField from './searchTextField/SearchTextField';

import { Cards } from '../types/Cards.types';
import { AxiosResponse } from 'axios';

const CardPokemon = () => {
  const { divContainerList, divContainerTextField } = useStylesCardPokemon();

  const [pokemons, setPokemons] = useState<Cards>();
  const [pokemon, setPokemon] = useState('');
  const [isInvalidPokemonName, setIsInvalidPokemonName] = useState<boolean>(
    false,
  );
  let pokemonPosition = 0;

  async function addAllPokemonsInList(): Promise<void> {
    const response = await api.get<Cards>('/cards');
    setPokemons(response.data);
  }

  async function searchForCard(): Promise<void> {
    try {
      const response = await api.get<Cards>(`cards?name=${pokemon}`);
      setPokemons(response.data);

      if (isInvalidSearchedPokemon(response)) {
        setIsInvalidPokemonName(true);
      } else {
        setIsInvalidPokemonName(false);
      }
    } catch (err) {
      console.log('An error occurred trying call the API');
    }
  }

  function isInvalidSearchedPokemon(response: AxiosResponse<Cards>): Boolean {
    return !response.data.cards?.length;
  }

  useEffect(() => {
    addAllPokemonsInList();
  }, []);

  return (
    <Fragment>
      <WelcomeTitle />

      <div className={divContainerTextField}>
        <SearchTextField
          onEnterPressedEvent={() => searchForCard()}
          setPokemon={setPokemon}
          /* I wanted to put all this on a "errorProperties: {...}", but I failed :( */
          hasError={isInvalidPokemonName}
          helperText="Invalid pokémon name. Try again!"
          labelText="Error"
        />
      </div>

      <div className={divContainerList}>
        <PokemonList cards={pokemons?.cards} index={pokemonPosition} />
      </div>
    </Fragment>
  );
};

export default CardPokemon;
