import BaseLayout from 'layouts/BaseLayout';
import Movies from 'components/movies/Movies';
import { getMovies } from 'endpoints/movies';

const Home = ({ movies }) => {
  return (
    <BaseLayout
      title='Welcome to the Cinemama Theaters'
      description='The best place to watch movies'
      className='base-layout__main'
    >
      <Movies movies={movies} />
    </BaseLayout>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
const getStaticProps = async () => {
  const movies = await getMovies();
  return {
    props: {
      movies,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60,
  };
};

export { getStaticProps };
export default Home;
