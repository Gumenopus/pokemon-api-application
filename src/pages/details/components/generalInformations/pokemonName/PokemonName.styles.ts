import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    textStyle: {
      marginTop: '50px',
      marginLeft: '50px',
      font: '25px Roboto, sans-serif',
    },
  }),
);

export default useStyles;
