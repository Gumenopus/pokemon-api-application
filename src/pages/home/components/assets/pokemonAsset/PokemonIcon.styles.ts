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

      width: '150px',
      height: '220px',

      cursor: 'pointer',
      Zoom: '1',
    },
  }),
);

export default useStyles;
