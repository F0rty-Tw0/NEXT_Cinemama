import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';
import wrapper from 'redux/store';

const MyApp = ({ Component, pageProps }) => (
  <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>
);

export default wrapper.withRedux(MyApp);
