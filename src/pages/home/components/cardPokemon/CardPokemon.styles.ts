import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '20px',

      textAlign: 'center',
    },
    textStyle: {
      paddingTop: '10px',
      paddingRight: '10px',
      paddingLeft: '10px',
      paddingBottom: '10px',
    },
  }),
);

export default useStyles;
