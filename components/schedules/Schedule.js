import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSchedule, setError } from 'redux/actions';
import Container from 'react-bootstrap/Container';
import BookingModal from 'features/booking/BookingModal';

const Schedule = ({ filteredSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const toggleModal = (selectedSchedule) => {
    if (user) {
      dispatch(setSelectedSchedule(selectedSchedule));
      setIsOpen(!isOpen);
    } else {
      dispatch(setError('Please login to see available seats'));
    }
  };

  return (
    <Container className='schedule-movie'>
      <Link
        passHref
        href={`/movies/${filteredSchedule[0].movie.id}`}
        as={`/movies/${filteredSchedule[0].movie.id}`}
      >
        <a>
          <div className='schedule-movie__image'>
            <Image
              width={'300'}
              height={'450'}
              alt={'FIXME'}
              className='schedule-movie__image'
              src={`https://www.themoviedb.org/t/p/w300/${filteredSchedule[0].movie.image}`}
            />
            <div className='schedule-movie__rating'>
              {filteredSchedule[0].movie.rating}
            </div>
            <div className='schedule-movie__age'>
              {filteredSchedule[0].movie.minAge}+
            </div>
          </div>
          <p className='schedule-movie__title'>
            {filteredSchedule[0].movie.title}
          </p>
        </a>
      </Link>
      {isOpen && (
        <BookingModal isOpen={isOpen} handleClose={toggleModal}></BookingModal>
      )}
      <div className='schedule-movie__genres'>
        {filteredSchedule[0].movie.genres.map((genre) => (
          <p className='schedule-movie__genre' key={genre.id}>
            {genre.name}
          </p>
        ))}
      </div>
      <div className='schedule-movie__time-slot'>
        {filteredSchedule.map((schedulePlaying) => (
          <div
            className='time-slot__box'
            onClick={() => toggleModal(schedulePlaying)}
            key={schedulePlaying.id}
          >
            <p className='time-slot__time'>{schedulePlaying.timeSlot}</p>
            <p className='time-slot__hall'>{schedulePlaying.hall.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Schedule;
