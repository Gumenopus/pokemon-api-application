import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
    marginLeft: '350px',
    marginRight: '350px',

    width: '100%',
  },
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
