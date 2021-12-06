import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)`
  color: ${(props) => (props.active ? 'palevioletred' : 'white')};

  :hover {
    color: #2e8b57;
  }
`;

export default CustomButton;
