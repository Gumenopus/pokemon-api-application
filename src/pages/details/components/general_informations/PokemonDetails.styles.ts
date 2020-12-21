import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(6),
    },
    containerPokemonInformations: {
      marginLeft: theme.spacing(6),
    },
    cardProps: {
      maxWidth: '800px',
      minWidth: '800px',
    },
  }),
);

export default useStyles;
