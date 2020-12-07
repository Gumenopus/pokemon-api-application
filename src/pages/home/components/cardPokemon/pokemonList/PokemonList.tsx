/* eslint-disable */
import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Cards from '../../types/Cards.types';

import PokemonIcon from '../../assets/pokemonAsset/PokemonIcon';
import useStyles from './PokemonList.styles';

const PokemonList = ({ cards }: Cards) => {
  const { gridContainer, circularProgressAlign } = useStyles();

  return (
    <Fragment>
      {cards ? (
        cards?.map(card => (
          <Grid key={card.imageUrl} className={gridContainer}>
            <PokemonIcon src={card.imageUrl} />
          </Grid>
        ))
      ) : (
        // TODO: Centralize this
        <CircularProgress />
      )}
    </Fragment>
  );
};

export default PokemonList;
