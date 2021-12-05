import Seat from '@/components/seats/Seat';

import { useEffect } from 'react';
import { setSeats } from 'redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getSeatsByHallIdDateAndTimeSlot } from 'endpoints/seats';

const BookingModal = () => {
  const dispatch = useDispatch();
  const { schedule } = useSelector((state) => state.selectedSchedule);
  const { seats } = useSelector((state) => state.seats);

  useEffect(() => {
    (async () => {
      const selectedSeats = await getSeatsByHallIdDateAndTimeSlot(
        schedule.hall.id,
        schedule.date,
        schedule.timeSlot
      );
      dispatch(setSeats(selectedSeats));
    })();
  }, [schedule, dispatch]);

  return seats.map((seat) => <Seat key={seat.id} name={seat.name} />);
};

export default BookingModal;
