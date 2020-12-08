/* eslint-disable */
import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';

import useStyles from './SearchTextField.styles';

import { ENTER_KEY } from '../../../constants/Constants';

interface Props {
  setPokemon: Function;
  onEnterPressedEvent: Function;
  hasError?: boolean;
  helperText?: string;
  labelText?: string;
}

const SearchTextField = (props: Props) => {
  const { textFieldContainer } = useStyles();

  return (
    <TextField
      error={props.hasError}
      helperText={props.hasError && props.helperText ? props.helperText : ''}
      label={props.hasError && props.labelText ? props.labelText : ''}
      variant="outlined"
      className={textFieldContainer}
      placeholder="Search for a pokémon card"
      onChange={it => props.setPokemon(it.target.value)}
      onKeyPress={it => {
        if (it.key === ENTER_KEY.toString()) {
          props.onEnterPressedEvent();
        }
      }}
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
