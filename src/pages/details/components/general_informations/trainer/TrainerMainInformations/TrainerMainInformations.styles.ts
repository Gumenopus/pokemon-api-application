import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerFirstInformations: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    containerSupertype: {
      display: 'flex',
      flexDirection: 'row',
    },
    trainerName: {
      font: '25px Roboto, sans-serif',
      color: '#303030',
      marginRight: theme.spacing(8),
    },
    trainerSupertype: {
      font: '25px Roboto, sans-serif',
      color: '#818181',
      marginRight: theme.spacing(0.5),
    },
    trainerSubtype: {
      font: '25px Roboto, sans-serif',
      color: '#818181',
      marginLeft: theme.spacing(0.5),
    },
  }),
);

export default useStyles;
