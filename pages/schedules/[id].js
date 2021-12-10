import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSelectedSchedule,
  setError,
  resetSeats,
  resetSelectedSeats,
} from 'redux/actions';
import { getSchedulesFromStorage } from 'services/schedulesService';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BaseLayout from 'layouts/BaseLayout';
import BookingModal from 'features/booking/BookingModal';
import SchedulePicker from 'components/schedules/SchedulePicker';
import ErrorPage from '../404';
import TimeSlot from 'components/schedules/TimeSlot';

const Schedule = ({ id }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { filteredSchedules } = useSelector((state) => state.filteredSchedules);
  const [isOpen, setIsOpen] = useState(false);
  const [savedSchedules, setSavedSchedules] = useState([]);

  const toggleModal = (selectedSchedule) => {
    if (user) {
      dispatch(setSelectedSchedule(selectedSchedule));
      setIsOpen(!isOpen);
      dispatch(resetSeats());
      dispatch(resetSelectedSeats());
    } else {
      dispatch(setError('Please login to see available seats'));
    }
  };

  useEffect(() => {
    setSavedSchedules(getSchedulesFromStorage());
  }, []);

  if (savedSchedules?.length > 0) {
    const movieSchedules = filteredSchedules.filter(
      (schedule) => schedule.movie.id == id
    );

    const movie = savedSchedules.filter(
      (schedule) => schedule.movie.id == id
    )[0]?.movie;

    const title = movie
      ? `Best description of movie ${movie.title}`
      : 'Cinemama: Loading movie...';

    return movie ? (
      <BaseLayout
        title={title}
        description='The best place to watch movies'
        className='base-layout__movie'
      >
        <Container className='schedule-movie__container'>
          <Row className='schedule-movie__row'>
            <Col md={12} lg={6} xl={3}>
              <div className='schedule-movie__image'>
                <Image
                  width={'500'}
                  height={'750'}
                  alt={`Poster of ${movie.title}`}
                  src={`https://www.themoviedb.org/t/p/w500/${movie.image}`}
                />
                <div className='schedule-movie__age'>{movie.minAge}+</div>
              </div>
            </Col>
            <Col>
              <SchedulePicker
                schedules={savedSchedules}
                className={'schedule-movie__schedule-picker'}
              />
              <h1 className='schedule-movie__title'>{movie.title}</h1>
              <p className='schedule-movie__info'>{movie.info}</p>
              <Row>
                <Col md={12} lg={7}>
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.trailer}`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='schedule-movie__trailer'
                  ></iframe>
                </Col>
                <Col>
                  <p className='schedule-movie__screen-time'>Screen time</p>
                  <p className='schedule-movie__screen-time--hour'>
                    {movie.screenTime}
                  </p>
                  <p className='schedule-movie__screen-rating'>Rating</p>
                  <p className='schedule-movie__screen-rating--amount'>
                    {movie.rating}
                    <Image
                      width={'80'}
                      height={'30'}
                      alt={`IMDB rating of ${movie.title}`}
                      src={`/imdb.svg`}
                    />
                  </p>
                </Col>
              </Row>
              <h2 className='schedule-movie__schedule'>
                Schedule for the next 3 days
              </h2>
              {isOpen && (
                <BookingModal
                  isOpen={isOpen}
                  handleClose={setIsOpen}
                ></BookingModal>
              )}
              <div className='schedule-movie__time-slot'>
                <TimeSlot
                  schedules={movieSchedules}
                  toggleModal={toggleModal}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </BaseLayout>
    ) : (
      <ErrorPage /> //FIXME: SHOULD BE LOADING STATE
    );
  }
  return <ErrorPage />;
};
export async function getServerSideProps(context) {
  return { props: context.query };
}
export default Schedule;
