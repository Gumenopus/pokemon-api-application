import { useState } from 'react';
import { api } from '../../api/api';
import Props from './types/Pokemon.type';

export const getPokemonInformations = (pokemon: Props) => {
  const [name, setName] = useState<Props>();
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  //remove this method
  async function apiRequest(name: string): Promise<void> {
    try {
      const response = await api.get(`pokemon/${name}`);
      setName(response.data);
    } catch (err) {
      console.log('An error occurred: ' + err);
    }
  }
  console.log(name);
};
