import dayjs from 'dayjs';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSchedule, setError } from 'redux/actions';
import { getScheduleByMovieId } from 'endpoints/schedules';
import { getMovies, getMovieById } from 'endpoints/movies';
import BookingModal from 'features/booking/BookingModal';
import BaseLayout from 'layouts/BaseLayout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import SchedulePicker from 'components/schedules/SchedulePicker';

const Schedule = ({ movie }) => {
  const { filteredSchedules } = useSelector((state) => state.filteredSchedules);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const toggleModal = (selectedSchedule) => {
    if (user) {
      dispatch(setSelectedSchedule(selectedSchedule));
      setOpenModal(!openModal);
    } else {
      dispatch(setError('Please login to see available seats'));
    }
  };
  const movieSchedule = filteredSchedules.filter(
    (schedule) => schedule.movie.id == movie.id
  );

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
      <Container className='movie__container'>
        <Row>
          <Col md={3}>
            <div className='movie__image'>
              <Image
                width={'500'}
                height={'750'}
                alt={'Poster Image'}
                src={`https://www.themoviedb.org/t/p/w500/${movie.image}`}
              />
              <div className='schedule-movie__age'>{movie.minAge}+</div>
            </div>
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

            <h3 className='movie__schedule'> Schedule for the next 3 days</h3>
            <SchedulePicker className={'movie__buttons'} />
            {openModal && <BookingModal></BookingModal>}
            {movieSchedule.map((schedulePlaying) => (
              <div
                className='time-slot__box movie__schedulebox'
                onClick={() => toggleModal(schedulePlaying)}
                key={schedulePlaying.id}
              >
                <p className='time-slot__time'>{schedulePlaying.timeSlot}</p>
                <p className='time-slot__hall'>{schedulePlaying.hall.name}</p>
              </div>
            ))}
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
  const movie = await getMovieById(params.id);
  return {
    props: {
      movie,
    },
    revalidate: 60,
  };
};

export { getStaticProps, getStaticPaths };
export default Schedule;
