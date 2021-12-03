import Link from 'next/link';
import { useState } from 'react';
import getAuthenticatedUserEmail from 'features/authentication/getAuthenticatedUserEmail';
import BookingModal from 'features/booking/BookingModal';

const Schedule = ({ filteredSchedule }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const toggleModal = (schedule) => {
    const email = getAuthenticatedUserEmail();
    if (email) {
      setSelectedSchedule(schedule);
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
      {openModal && (
        <BookingModal selectedSchedule={selectedSchedule}></BookingModal>
      )}
      {filteredSchedule[0].movie.genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
      {filteredSchedule.map((schedule) => (
        <div onClick={() => toggleModal(schedule)} key={schedule.id}>
          <p>{schedule.timeSlot}</p>
          <p>{schedule.hall.name}</p>
        </div>
      ))}
    </>
  );
};

export default Schedule;
