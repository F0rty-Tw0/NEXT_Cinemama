import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Error has occurred</title>
        <meta name='description' content='Page not found' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>404: Page not found.</h1>
        <Link href='/'>Back</Link>
      </main>
    </div>
  );
};
export default ErrorPage;
