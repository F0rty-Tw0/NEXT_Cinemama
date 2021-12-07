import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import wrapper from 'redux/store';
import theme from 'styled-components/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
