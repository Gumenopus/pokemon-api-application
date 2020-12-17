import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerFirstInformations: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    pokemonName: {
      font: '30px Roboto, sans-serif',
      color: '#303030',
    },
    pokemonSupertype: {
      marginLeft: '50px',
      font: '30px Roboto, sans-serif',
      color: '#818181',
    },
    pokemonSubtype: {
      marginLeft: '10px',
      font: '30px Roboto, sans-serif',
      color: '#818181',
    },
    pokemonHP: {
      marginLeft: '100px',
      font: '30px Roboto, sans-serif',
      color: '#303030',
    },
  }),
);

export default useStyles;
