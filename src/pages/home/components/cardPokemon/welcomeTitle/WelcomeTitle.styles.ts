import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  // Components
  textTitleContainer: {
    alignContent: 'center',
    font: '40px Fredoka One',
  },
  imageContainer: {
    marginLeft: '20px',

    width: '200px',
    height: '100px',
  },
  // Divs
  divContainerTitle: {
    marginBottom: '100px',

    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'center',
  },
});

export default useStyles;