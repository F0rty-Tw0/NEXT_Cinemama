import Seat from '@/components/seats/Seat';

import { useEffect } from 'react';
import { setSeats, setLoading, resetLoading } from 'redux/actions';
import makeBooking from './makeBooking';
import { useSelector, useDispatch } from 'react-redux';
import { getSeatsByHallIdDateAndTimeSlot } from 'endpoints/seats';

const BookingModal = () => {
  const dispatch = useDispatch();
  const { schedule } = useSelector((state) => state.selectedSchedule);
  const { user } = useSelector((state) => state.user);
  const { selectedSeats } = useSelector((state) => state.selectSeats);
  const { seats } = useSelector((state) => state.seats);

  useEffect(() => {
    (async () => {
      dispatch(setLoading());
      const scheduleSeats = await getSeatsByHallIdDateAndTimeSlot(
        schedule.hall.id,
        schedule.date,
        schedule.timeSlot
      );
      dispatch(setSeats(scheduleSeats));
      dispatch(resetLoading());
    })();
  }, [schedule, dispatch]);

  const onBooking = async () => {
    dispatch(setLoading());
    const booking = await makeBooking(selectedSeats, schedule?.id, user?.id);
    console.log(booking);
    dispatch(resetLoading());
  };
  return (
    <>
      {seats.map((seat) => (
        <Seat key={seat.id} seat={seat} />
      ))}
      <button onClick={() => onBooking()}>Book</button>
    </>
  );
};

export default BookingModal;
