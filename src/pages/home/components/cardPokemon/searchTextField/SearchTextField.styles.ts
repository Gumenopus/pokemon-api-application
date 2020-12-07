import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    textFieldContainer: {
      marginBottom: '50px',

      marginLeft: '100px',
      marginRight: '100px',

      width: '100%',
    },
  }),
);

export default useStyles;
