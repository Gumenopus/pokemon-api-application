/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import Card from '@material-ui/core/Card';

import api from '../../../../service/api';
import { SpecificPokemon } from '../../../../types/Cards.types';

import useStyles from './PokemonDetails.styles';
import CardImage from './pokemon/CardImage/CardImage';
import PokemonMainInformations from './pokemon/PokemonMainInformations/PokemonMainInformations';
import PokemonAttacks from './pokemon/pokemon_attacks/PokemonAttacks';
import BottomInformations from './pokemon/BottomInformations/BottomInformations';

import TrainerMainInformations from './trainer/TrainerMainInformations/TrainerMainInformations';
import TrainerText from './trainer/TrainerText/TrainerText';

interface URLRouteMatchProp {
  id: string;
}

const PokemonDetails = () => {
  const { params } = useRouteMatch<URLRouteMatchProp>();
  const { container, containerPokemonInformations, cardProps } = useStyles();
  const [isPokemon, setIsPokemon] = useState<boolean>(false);

  const [pokemon, setPokemon] = useState<SpecificPokemon>();

  async function getClickedPokemonInformations(): Promise<void> {
    const response = await api.get<SpecificPokemon>(`cards/${params.id}`);
    setPokemon(response.data);

    setIfCardIsPokemon(response);
  }

  function setIfCardIsPokemon(response: AxiosResponse<SpecificPokemon>) {
    if (response.data.card.supertype === 'Pokémon') {
      setIsPokemon(true);
    }
  }

  useEffect(() => {
    getClickedPokemonInformations();
  }, []);

  return (
    /* I didn't give so much priority for layout, so... */
    <Fragment>
      <div className={container}>
        <CardImage src={pokemon?.card.imageUrlHiRes} />
        {isPokemon ? (
          /* Pokémon stats */
          <div className={containerPokemonInformations}>
            <Card className={cardProps}>
              <PokemonMainInformations card={pokemon} />
              <PokemonAttacks
                attacks={pokemon?.card.attacks}
                ability={pokemon?.card.ability}
              />
              <BottomInformations pokemon={pokemon} />
            </Card>
          </div>
        ) : (
          /* Trainer stats */
          <div className={containerPokemonInformations}>
            <Card className={cardProps}>
              <TrainerMainInformations card={pokemon} />
              <TrainerText card={pokemon} />
              <BottomInformations pokemon={pokemon} />
            </Card>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PokemonDetails;
