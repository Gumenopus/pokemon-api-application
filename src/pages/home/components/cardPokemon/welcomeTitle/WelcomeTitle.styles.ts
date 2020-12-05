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
  textFieldContainer: {
    marginBottom: '50px',

    marginLeft: '350px',
    marginRight: '10px',

    width: '100%',
  },
  buttonSearchContainer: {
    marginTop: '10px',

    width: '50%',
    height: '40px',

    marginRight: '40px',
  },
  // Divs
  divContainerTitle: {
    marginBottom: '100px',

    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'center',
  },
  divContainerTextField: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default useStyles;
