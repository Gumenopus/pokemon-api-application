import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      cursor: 'pointer',

      marginTop: '20px',
      marginBottom: '20px',
      marginLeft: '20px',
      marginRight: '20px',

      display: 'flex',

      width: '220px',
      height: '300px',
      /* TODO: implement hover, transform: translateX(5px) */
    },
  }),
);

export const CardHover = styled.div`
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-10px);
  }
`;

export default useStyles;
