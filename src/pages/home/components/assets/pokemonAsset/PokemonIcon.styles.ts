import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: '10px',
      marginBottom: '30px',

      justifyContent: 'center',
      alignItems: 'center',

      width: '100px',
      height: '100px',
    },
  }),
);

export default useStyles;
