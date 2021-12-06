import 'styles/globals.css';
import wrapper from 'redux/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#75c17e',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default wrapper.withRedux(MyApp);
