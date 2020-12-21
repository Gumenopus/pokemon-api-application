import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    weaknessContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    resistanceContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    retreatCostContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    artistContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    retreatCostIcons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginRight: theme.spacing(2),
    },
    titleFont: {
      font: '20px Roboto, sans-serif',
    },
    valueFont: {
      font: '16px Roboto, sans-serif',
      color: '#818181',
    },
  }),
);

export default useStyles;
