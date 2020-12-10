/* eslint-disable */
import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Cards from '../../types/Cards.types';

import PokemonIcon from '../../assets/pokemonAsset/PokemonIcon';
import useStyles from './PokemonList.styles';

import { CardHover } from '../../assets/pokemonAsset/PokemonIcon.styles';

interface Props {
  onClick: Function;
  cards?: [
    {
      name: string;
      imageUrl: string;
    },
  ];
}

const PokemonList = ({ cards, onClick }: Props) => {
  const { gridContainer, circularProgressAlign } = useStyles();

  return (
    <Fragment>
      {cards ? (
        cards?.map(card => (
          <Grid key={card.imageUrl} className={gridContainer}>
            <CardHover>
              <PokemonIcon onClick={() => onClick()} src={card.imageUrl} />
            </CardHover>
          </Grid>
        ))
      ) : (
        <div className={circularProgressAlign}>
          <CircularProgress />
        </div>
      )}
    </Fragment>
  );
};

export default PokemonList;
