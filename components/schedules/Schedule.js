import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSchedule, setError } from 'redux/actions';
import Card from 'react-bootstrap/Card';
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
    <Card style={{ width: '23.2459677419%' }}>
      <Card.Img
        variant='top'
        src={`https://www.themoviedb.org/t/p/w200/${filteredSchedule[0].movie.image}`}
      />
      <Card.Body>
        <Card.Title>
          <Link
            passHref
            href={`/movies/${filteredSchedule[0].movie.id}`}
            as={`/movies/${filteredSchedule[0].movie.id}`}
          >
            <a>{filteredSchedule[0].movie.title}</a>
          </Link>
        </Card.Title>
        {openModal && <BookingModal></BookingModal>}
        {filteredSchedule[0].movie.genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
        {filteredSchedule.map((schedulePlaying) => (
          <Card.Text
            onClick={() => toggleModal(schedulePlaying)}
            key={schedulePlaying.id}
          >
            {schedulePlaying.timeSlot}
            {schedulePlaying.hall.name}
          </Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Schedule;
