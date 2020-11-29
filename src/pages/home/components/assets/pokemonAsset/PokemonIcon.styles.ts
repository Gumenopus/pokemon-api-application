import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: '10px',
      marginBottom: '10px',

      width: '100px',
      height: '100px',
    },
  }),
);

export default useStyles;
