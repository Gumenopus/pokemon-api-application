import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

import Cards from '../../types/Cards.types';

import PokemonIcon from '../../assets/pokemonAsset/PokemonIcon';
import useStyles from './PokemonList.styles';

const PokemonList = ({ cards }: Cards) => {
  const { gridContainer } = useStyles();

  return (
    /* eslint-disable react/jsx-fragments */
    <Fragment>
      {cards?.map(card => (
        <Grid key={card.imageUrl} className={gridContainer}>
          <PokemonIcon src={card.imageUrl} />
        </Grid>
      ))}
      ;
    </Fragment>
  );
};

export default PokemonList;
