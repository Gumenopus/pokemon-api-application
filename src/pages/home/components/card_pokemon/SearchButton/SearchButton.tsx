import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './SearchButton.styles';

interface Props {
  onClick: Function;
}

const SearchButton = (props: Props) => {
  const { buttonSearchContainer } = useStyles();
  return (
    <Button
      className={buttonSearchContainer}
      variant="contained"
      color="primary"
      onClick={() => props.onClick()}
    >
      Search
    </Button>
  );
};

export default SearchButton;
