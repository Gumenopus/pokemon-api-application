import React from 'react';

import useStyles from './PokemonIcon.styles';

const CharmanderIcon = () => {
  const { container } = useStyles();

  return (
    <img
      alt="charmander"
      src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
      className={container}
    />
  );
};
export default CharmanderIcon;
