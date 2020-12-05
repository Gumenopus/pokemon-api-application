import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './SearchButton.styles';

const SearchButton = () => {
  const { buttonSearchContainer } = useStyles();
  return (
    <Button
      className={buttonSearchContainer}
      variant="contained"
      color="primary"
    >
      Search
    </Button>
  );
};

export default SearchButton;
