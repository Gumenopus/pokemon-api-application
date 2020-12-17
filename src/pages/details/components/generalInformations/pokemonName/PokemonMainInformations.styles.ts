import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerFirstInformations: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    containerSupertype: {
      display: 'flex',
      flexDirection: 'row',
    },
    pokemonName: {
      font: '25px Roboto, sans-serif',
      color: '#303030',
      marginRight: theme.spacing(8),
    },
    pokemonSupertype: {
      font: '25px Roboto, sans-serif',
      color: '#818181',
      marginRight: theme.spacing(0.5),
    },
    pokemonSubtype: {
      font: '25px Roboto, sans-serif',
      color: '#818181',
      marginLeft: theme.spacing(0.5),
    },
    pokemonHP: {
      font: '25px Roboto, sans-serif',
      color: '#303030',
      marginLeft: theme.spacing(8),
    },
  }),
);

export default useStyles;
