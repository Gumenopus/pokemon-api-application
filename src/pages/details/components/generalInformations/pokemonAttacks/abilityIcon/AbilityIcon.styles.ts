import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageProps: {
      width: '60px',
      height: '20px',
      marginRight: theme.spacing(1),
    },
  }),
);

export default useStyles;
