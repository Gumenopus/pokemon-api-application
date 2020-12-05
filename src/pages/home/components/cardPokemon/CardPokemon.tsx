/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import api from 'service/api';

import useStylesCardPokemon from './CardPokemon.styles';
import useStylesTitle from './welcomeTitle/WelcomeTitle.styles';
import WelcomeTitle from './welcomeTitle/WelcomeTitle';

import TITLE_HOME_IMAGE from '../../constants/Constants';

import PokemonIcon from '../assets/pokemonAsset/PokemonIcon';
import InputAdornment from '@material-ui/core/InputAdornment';

interface Props {
  cards: [
    {
      name: string;
      imageUrl: string;
    },
  ];
}

const CardPokemon = () => {
  const { gridContainer, divContainer } = useStylesCardPokemon();
  const {
    textFieldContainer,
    buttonSearchContainer,
    divContainerTextField,
  } = useStylesTitle();

  const [pokemons, setPokemons] = useState<Props>();

  async function addAllPokemonsInList(): Promise<void> {
    const response = await api.get<Props>('/cards');
    setPokemons(response.data);
  }

  useEffect(() => {
    addAllPokemonsInList();
  }, []);

  return (
    <Fragment>
      <WelcomeTitle />

      <div className={divContainerTextField}>
        <TextField
          variant={'outlined'}
          className={textFieldContainer}
          placeholder={'Search for a pokémon card'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#9F9F9F' }} />
              </InputAdornment>
            ),
          }}
        ></TextField>

        <Button
          className={buttonSearchContainer}
          variant={'contained'}
          color={'primary'}
        >
          Search
        </Button>
      </div>

      <div className={divContainer}>
        {pokemons?.cards.map(card => (
          <Grid key={card.imageUrl} className={gridContainer}>
            <PokemonIcon src={card.imageUrl}></PokemonIcon>
          </Grid>
        ))}
      </div>
    </Fragment>
  );
};

export default CardPokemon;
