import 'styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import wrapper from 'redux/store';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
