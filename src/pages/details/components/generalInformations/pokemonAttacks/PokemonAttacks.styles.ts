import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingLeft: theme.spacing(2),
    },
    pokemonFirstAttack: {
      font: '20px Roboto, sans-serif',
    },
    pokemonSecondAttack: {
      font: '20px Roboto, sans-serif',
    },
  }),
);

export default useStyles;
