import BaseLayout from 'layouts/BaseLayout';
import dayjs from 'dayjs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import SchedulePicker from 'components/schedules/SchedulePicker';
import { getScheduleByMovieId } from 'endpoints/schedules';
import { getMovies, getMovieById } from 'endpoints/movies';

const Schedule = ({ schedule, movie }) => {
  const today = dayjs().format('YYYY-MM-DD');
  const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
  const afterTomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

  const todaySchedule = schedule.filter((sch) => sch.date == today);
  const tomorrowSchedule = schedule.filter((sch) => sch.date == tomorrow);
  const afterTomorrowSchedule = schedule.filter(
    (sch) => sch.date == afterTomorrow
  );

  /*  function displaySchedule(arraySchedule) {
    arraySchedule.map((schedulePlayed) => {
      console.log(schedulePlayed);
    });
  } */

  return (
    <BaseLayout
      title={
        schedule
          ? `Best description of movie ${schedule.id}`
          : 'Cinemama: Loading movie...'
      }
      description='The best place to watch movies'
      className='base-layout__movie'
    >
      <Container className='movie__container'>
        <Row>
          <Col md={3}>
            {/* <div className='movie__image'>
              <image
                width={'300'}
                height={'450'}
                alt={'FIXME'}
                src={`https://www.themoviedb.org/t/p/w300/${movie.image}`}
              />
              <div className='schedule-movie__age'>{movie.minAge}+</div>
            </div> */}
          </Col>
          <Col>
            <h1 className='movie__title'>{movie.title}</h1>
            <p className='movie__info'>{movie.info}</p>
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
            <Row>
              <h3 className='movie__schedule'> Schedule for the next 3 days</h3>
              <SchedulePicker />
            </Row>
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};
const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const movies = await getMovies();
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
  const schedule = await getScheduleByMovieId(params.id);
  const movie = await getMovieById(params.id);
  return {
    props: {
      schedule,
      movie,
    },
    revalidate: 60,
  };
};

export { getStaticProps, getStaticPaths };
export default Schedule;
