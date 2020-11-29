import React from 'react';

import Box from '@material-ui/core/Box';

import useStyles from './PokemonIcon.styles';

const CharmanderIcon = () => {
  const { container } = useStyles();

  return (
    <Box>
      <img
        alt="charmander"
        src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
        className={container}
      />
    </Box>
  );
};
export default CharmanderIcon;
