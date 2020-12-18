import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageProps: {
      width: '90px',
      height: '30px',
      marginRight: theme.spacing(1),
    },
  }),
);

export default useStyles;
