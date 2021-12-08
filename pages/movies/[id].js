import { useRouter } from 'next/router';
import Image from 'next/Image';
import BaseLayout from 'layouts/BaseLayout';
import ErrorPage from '../404';
import { getMovies, getMovieById } from 'endpoints/movies';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Movie = ({ movie, filteredSchedule }) => {
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
        <Container className='movie__container'>
          <Row>
            <Col md={3}>
              <img
                className='movie__photo'
                src={`https://www.themoviedb.org/t/p/w200/${movie.poster}`}
                alt={`${movie.title} image`}
              />
            </Col>
            <Col>
              <h1>{movie.title}</h1>
              <p>{movie.info}</p>
              <Row style={{ marginTop: '3vh' }}>
                <Col>
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.trailer}`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    style={{ height: '12rem' }}
                  ></iframe>
                </Col>
                <Col>
                  <h5>Screen time</h5>
                  <p>{movie.screenTime} </p>
                  <h5>Minimum Age</h5>
                  <p>{movie.minAge} </p>
                  <h5>Rating</h5>
                  <p>{movie.rating} </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </BaseLayout>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
const getStaticPaths = async () => {
  const movies = await getMovies();
  // Get the paths we want to pre-render based on posts
  const paths = movies.map((movie) => {
    return {
      params: { id: movie.id.toString() },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: true } will server-render pages
  // on-demand if the path doesn't exist.
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
