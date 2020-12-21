import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    divContainerList: {
      width: '100%',
      display: 'flex',

      flexDirection: 'row',
      justifyContent: 'center',

      flexWrap: 'wrap', // here are the magic!!! :D
    },
    divContainerTextField: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

export default useStyles;
