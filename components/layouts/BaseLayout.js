import Head from 'next/head';
import Nav from 'components/shared/Nav';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';
import Carousel from 'components/shared/Carousel';
const BaseLayout = ({ className, title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${className}`}>
        <Header className='base-layout__header' />
        <Carousel className='base-layout__carousel' />
        <Nav className='base-layout__nav' />
        <section className='base-layout__content'>{children}</section>
        <Footer className='base-layout__footer' />
      </main>
    </>
  );
};
export default BaseLayout;
