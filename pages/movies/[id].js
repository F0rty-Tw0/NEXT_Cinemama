import { useRouter } from 'next/router';
import BaseLayout from 'layouts/BaseLayout';
import ErrorPage from '../404';
import { getMovies, getMovieById } from 'endpoints/movies';
import Container from 'react-bootstrap/Container';

const Movie = ({ movie }) => {
  const router = useRouter();
  if (!router.isFallback && !movie.id) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }
  return (
    <BaseLayout
      title={
        movie
          ? `Best description of movie ${movie.title}`
          : 'Cinemama: Loading movie...'
      }
      description='The best place to watch movies'
      className='base-layout__movie'
    >
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <Container className='movie__container'></Container>
      )}
    </BaseLayout>
  );
};

const getStaticPaths = async () => {
  const movies = await getMovies();
  const paths = movies.map((movie) => {
    return {
      params: { id: movie.id.toString() },
    };
  });

  return { paths, fallback: true };
};

const getStaticProps = async ({ params }) => {
  const movie = await getMovieById(params.id);
  return {
    props: {
      movie,
    },
    revalidate: 60,
  };
};

export { getStaticProps, getStaticPaths };
export default Movie;
