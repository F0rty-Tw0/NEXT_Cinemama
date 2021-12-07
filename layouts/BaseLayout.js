import Head from 'next/head';
import Nav from 'components/shared/Nav';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';
import Error from 'components/shared/Error';
import Loading from 'components/shared/Loading';
import Carousel from 'components/shared/Carousel';
import StyledContainer from 'styled-components/StyledContainer';

const BaseLayout = ({ className, title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
        <main className={`${className}`}>
      <StyledContainer>
          <Header className='base-layout__header' />
          <Error className='base-layout__error' />
          <Loading className='base-layout__loading' />
          <Carousel className='base-layout__carousel' />
          <Nav className='base-layout__nav' />
          <section className='base-layout__content'>{children}</section>
          <Footer className='base-layout__footer' />
      </StyledContainer>
        </main>
    </>
  );
};
export default BaseLayout;
