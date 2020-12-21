import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    circularProgressAlign: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

export default useStyles;
