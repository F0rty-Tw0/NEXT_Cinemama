import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSchedule } from 'redux/actions';
import BookingModal from 'features/booking/BookingModal';

const Schedule = ({ filteredSchedule }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  //NOTE: multiple executions

  const toggleModal = (selectedSchedule) => {
    if (user) {
      dispatch(setSelectedSchedule(selectedSchedule));
      setOpenModal(!openModal);
    } else {
      console.log('You have to log in first');
    }
  };
  return (
    <>
      This is schedule:
      <Link
        href={`/movies/${filteredSchedule[0].movie.id}`}
        as={`/movies/${filteredSchedule[0].movie.id}`}
      >
        {`title: ${filteredSchedule[0].movie.title}`}
      </Link>
      {openModal && <BookingModal></BookingModal>}
      {filteredSchedule[0].movie.genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
      {filteredSchedule.map((schedulePlaying) => (
        <div
          onClick={() => toggleModal(schedulePlaying)}
          key={schedulePlaying.id}
        >
          <p>{schedulePlaying.timeSlot}</p>
          <p>{schedulePlaying.hall.name}</p>
        </div>
      ))}
    </>
  );
};

export default Schedule;
