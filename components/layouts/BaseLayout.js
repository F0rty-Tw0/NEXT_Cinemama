import { useEffect, useState } from 'react';
import Head from 'next/head';
import Nav from 'components/shared/Nav';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';
import Carousel from 'components/shared/Carousel';

const BaseLayout = ({ className, title, description, children }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    (async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      setEmail(user.email);
    })();
  });
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
        <Nav email={email} className='base-layout__nav' />
        <section className='base-layout__content'>{children}</section>
        <Footer className='base-layout__footer' />
      </main>
    </>
  );
};
export default BaseLayout;
