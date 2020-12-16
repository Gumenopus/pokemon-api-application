import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../../../service/api';

import useStyles from './PokemonDetails.styles';
import { SpecificPokemon } from '../../../../types/Cards.types';

interface URLRouteMatchProp {
  id: string;
}

const PokemonDetails = () => {
  const { params } = useRouteMatch<URLRouteMatchProp>();
  const { divTitle } = useStyles();

  const [pokemon, setPokemon] = useState<SpecificPokemon>();

  async function getClickedPokemonInformations(): Promise<void> {
    /* 
      Yeah, well... I'm doing a request each time that I click in one object.
      I'm sorry for that, but I still don't know a better way to do that :p 
      TODO: fix that
    */
    const response = await api.get<SpecificPokemon>(`cards/${params.id}`);
    setPokemon(response.data);
  }

  useEffect(() => {
    getClickedPokemonInformations();
  }, []);

  return (
    <div className={divTitle}>
      <img alt="pokemon" src={pokemon?.card.imageUrl} />
    </div>
  );
};

export default PokemonDetails;
