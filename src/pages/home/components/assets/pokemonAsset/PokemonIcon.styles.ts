import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: '10px',
      marginBottom: '10px',
      marginLeft: '10px',
      marginRight: '10px',

      justifyContent: 'center',
      alignItems: 'center',

      width: '130px',
      height: '180px',
    },
  }),
);

export default useStyles;
