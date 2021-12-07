import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const MovieCard = styled(Card)`
  width: 25vw;
  display: flex;
  justify-content: center;
  text-align: center;

  transition: 200ms ease;
  :hover {
    transform: translate(0, -2px);
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }
`;

export { MovieCard };
