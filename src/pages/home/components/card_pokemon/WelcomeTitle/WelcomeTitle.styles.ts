import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textTitleFont: {
    font: '30px Roboto, sans-serif',
  },
  textContentFont: {
    font: '23px Roboto, sans-serif',
    color: '#818181',
  },
});

export default useStyles;
