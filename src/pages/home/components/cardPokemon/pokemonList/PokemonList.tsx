/* eslint-disable */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import PokemonIcon from '../../assets/pokemonAsset/PokemonIcon';
import useStyles from './PokemonList.styles';

import { Cards } from '../../types/Cards.types';

const PokemonList = ({ cards, index }: Cards) => {
  const { circularProgressAlign } = useStyles();

  const onHandler = (position: number) => {
    index = position;
    console.log('Position ', index);
  };

  return (
    <Fragment>
      {cards ? (
        cards?.map((card, index) => (
          <Link key={card.id} to={`/details/${card.id}`}>
            <PokemonIcon
              key={index}
              onClick={() => onHandler(index)}
              src={card.imageUrl}
            />
          </Link>
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
