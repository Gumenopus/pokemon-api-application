/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Card from '@material-ui/core/Card';

import api from '../../../../service/api';

import useStyles from './PokemonDetails.styles';
import { SpecificPokemon } from '../../../../types/Cards.types';
import CardImage from './card/CardImage';
import PokemonMainInformations from './pokemonName/PokemonMainInformations';
import PokemonAttacks from './pokemonAttacks/PokemonAttacks';

interface URLRouteMatchProp {
  id: string;
}

const PokemonDetails = () => {
  const { params } = useRouteMatch<URLRouteMatchProp>();
  const { container, containerPokemonInformations } = useStyles();

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
    <Fragment>
      <div className={container}>
        <CardImage src={pokemon?.card.imageUrlHiRes}></CardImage>
        <div className={containerPokemonInformations}>
          <Card>
            <PokemonMainInformations
              pokemon={pokemon}
            ></PokemonMainInformations>
            {/* TODO: put a <Divider/> here */}
            <PokemonAttacks />
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export default PokemonDetails;
