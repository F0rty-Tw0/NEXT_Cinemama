import { styled } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";

const CustomNav = styled(AppBar)`
  color: ${(props) => (props.active ? 'palevioletred' : 'white')};

`;

export default CustomNav;