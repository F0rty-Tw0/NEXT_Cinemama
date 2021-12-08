import Head from 'next/head';
import NavBar from 'components/shared/NavBar';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';
import Error from 'components/shared/Error';
import Loading from 'components/shared/Loading';
import Carousel from 'components/shared/Carousel';
import Container from 'react-bootstrap/Container';

const BaseLayout = ({ className, title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`base-layout ${className}`}>
        <Container className={'base-layout__container'}>
          <Header className='base-layout__header' />
          <Error className='base-layout__error' />
          <Loading className='base-layout__loading' />
          <Carousel className='base-layout__carousel' />
          <NavBar className='base-layout__nav' />
          <section className='base-layout__content'>{children}</section>
          <Footer className='base-layout__footer' />
        </Container>
      </main>
    </>
  );
};
export default BaseLayout;
