import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '220px',
      height: '300px',

      cursor: 'pointer',
      display: 'flex',

      marginTop: '30px',
      marginBottom: '30px',
      marginLeft: '15px',
      marginRight: '15px',
    },
    image: {
      width: '100%',
    },
  }),
);

export const CardHover = styled.div`
  &:hover {
    transition: transform 0.2s;
    transform: translateY(-10px);
  }
  transition: transform 0.2s;
  transform: translateY(10px);
`;

export default useStyles;
