import Link from 'next/link';
import Image from 'next/Image';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSchedule, setError } from 'redux/actions';
import Container from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import BookingModal from 'features/booking/BookingModal';

const Schedule = ({ filteredSchedule }) => {
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
  return (
    <Container className='schedule__card'>
      <p>Rating: {filteredSchedule[0].movie.rating}</p>
      <Image
        width={300}
        height={200}
        alt={'FIXME'}
        src={`https://www.themoviedb.org/t/p/w200/${filteredSchedule[0].movie.image}`}
      />
      <Link
        passHref
        href={`/movies/${filteredSchedule[0].movie.id}`}
        as={`/movies/${filteredSchedule[0].movie.id}`}
      >
        <a>{filteredSchedule[0].movie.title}</a>
      </Link>
      {openModal && <BookingModal></BookingModal>}
      {filteredSchedule[0].movie.genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
      <div className='schedule__cardContainer'>
        {filteredSchedule.map((schedulePlaying) => (
          <p
            className='schedule__cardText'
            onClick={() => toggleModal(schedulePlaying)}
            key={schedulePlaying.id}
          >
            {schedulePlaying.timeSlot}
            {schedulePlaying.hall.name}
          </p>
        ))}
      </div>
    </Container>
  );
};

export default Schedule;
