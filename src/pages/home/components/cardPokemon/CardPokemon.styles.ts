import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    divContainer: {
      display: 'flex',
      flexDirection: 'row', // just talking :p can be 'ltr' (left to right)
      flexWrap: 'wrap', // that's the magic!!! :D
    },
  }),
);

export default useStyles;
