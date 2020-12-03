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
      flexDirection: 'row',
    },
  }),
);

export default useStyles;
