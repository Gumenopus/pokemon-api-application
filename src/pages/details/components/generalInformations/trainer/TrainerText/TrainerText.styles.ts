import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingLeft: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    containerRulesTrainer: {},
    textRulesFont: {
      font: '20px Roboto, sans-serif',
    },
    textFont: {
      font: '15px Roboto, sans-serif',
      color: '#8C8C8C',
      paddingRight: theme.spacing(2),
    },
  }),
);

export default useStyles;
