import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 220,
      height: 300,
      cursor: 'pointer',
      display: 'flex',
      marginTop: '30px',
      marginBottom: '30px',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      '&:hover': {
        transition: 'transform 0.2s',
        transform: `translateY(-${theme.spacing(2)}px)`,
      },
      transition: 'transform 0.2s',
      transform: `translateY(${theme.spacing(1)}px)`,
    },
    image: {
      width: '100%',
    },
  }),
);

export default useStyles;
