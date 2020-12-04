import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '30px',
      paddingRight: '20px',
    },
    divContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap', // here are the magic!!! :D
    },
    textTitleContainer: {
      font: '25px Fredoka One, sans-serif',
    },
  }),
);

export default useStyles;
