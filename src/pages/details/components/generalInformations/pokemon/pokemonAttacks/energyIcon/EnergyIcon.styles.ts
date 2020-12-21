import { createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageProps: {
      width: '20px',
      height: '20px',
      marginRight: theme.spacing(1),
    },
  }),
);

export default useStyles;
