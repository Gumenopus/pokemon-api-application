import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: theme.spacing(6),
    },
    containerPokemonInformations: {
      marginLeft: theme.spacing(6),
    },
  }),
);

export default useStyles;
