import Head from 'next/head';
import Link from 'next/link';
const ErrorPage = () => {
  return (
    <div>
      <Head>
        <title>Error has occurred</title>
        <meta name='description' content='Page not found' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>404: Page not found.</h1>
        <Link href='/'>Back</Link>
      </main>
    </div>
  );
};
export default ErrorPage;
