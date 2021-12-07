import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const CustomIconButton = styled(IconButton)`
  color: ${({ active }) => (active ? 'palevioletred' : 'white')};
  :hover {
    color: #2e8b57;
  }
`;

export default CustomIconButton;
