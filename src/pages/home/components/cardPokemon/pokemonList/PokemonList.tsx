import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

import Card from '../../types/Card.types';

import PokemonIcon from '../../assets/pokemonAsset/PokemonIcon';
import useStyles from './PokemonList.styles';

const PokemonList = ({ cards }: Card) => {
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
