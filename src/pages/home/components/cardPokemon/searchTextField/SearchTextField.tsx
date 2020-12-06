/* eslint-disable */
import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';

import useStyles from './SearchTextField.styles';

interface Props {
  setPokemon: Function;
}

const SearchTextField = (props: Props) => {
  const { textFieldContainer } = useStyles();

  return (
    <TextField
      variant="outlined"
      className={textFieldContainer}
      placeholder="Search for a pokémon card"
      onChange={it => props.setPokemon(it.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: '#9F9F9F' }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchTextField;
