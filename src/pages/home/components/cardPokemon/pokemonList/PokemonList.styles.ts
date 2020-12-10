import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '30px',
    },
    circularProgressAlign: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

export default useStyles;
