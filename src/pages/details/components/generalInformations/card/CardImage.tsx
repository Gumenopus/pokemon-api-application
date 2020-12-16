/* eslint-disable */
import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';

import useStyles from './CardImage.styles';

interface PokemonImage {
  src?: string;
}

const DetailedImage = ({ src }: PokemonImage) => {
  const { alignProps } = useStyles();
  return (
    <Fragment>
      {src ? (
        <img className={alignProps} src={src}></img>
      ) : (
        <CircularProgress className={alignProps} />
      )}
    </Fragment>
  );
};

export default DetailedImage;
