import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '30px',
      paddingRight: '20px',
    },
  }),
);

export default useStyles;
