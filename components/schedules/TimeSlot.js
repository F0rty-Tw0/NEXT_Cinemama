import {
  setSelectedSchedule,
  setError,
  resetSeats,
  resetSelectedSeats,
} from 'redux/actions';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookingModal from 'features/booking/BookingModal';

const TimeSlot = ({ schedules }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (schedule) => {
    if (user) {
      dispatch(setSelectedSchedule(schedule));
      setIsOpen(!isOpen);
      dispatch(resetSeats());
      dispatch(resetSelectedSeats());
    } else {
      dispatch(setError('Please login to see available seats'));
    }
  };

  return schedules.length > 0 ? (
    <>
      {isOpen && (
        <BookingModal isOpen={isOpen} handleClose={toggleModal}></BookingModal>
      )}
      {schedules.map((schedule) => (
        <div
          className='time-slot__box'
          onClick={() => toggleModal(schedule)}
          key={schedule.id}
        >
          <p className='time-slot__time'>{schedule.timeSlot}</p>
          <p className='time-slot__hall'>{schedule.hall.name}</p>
        </div>
      ))}
    </>
  ) : (
    <p key='0'>No Playtime available for this day</p>
  );
};
export default TimeSlot;
