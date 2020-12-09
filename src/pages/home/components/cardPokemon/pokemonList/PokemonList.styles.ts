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
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

export default useStyles;
