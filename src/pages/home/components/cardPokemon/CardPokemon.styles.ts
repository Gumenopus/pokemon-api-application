import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    divContainerList: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap', // here are the magic!!! :D
    },
    divContainerTextField: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

export default useStyles;
