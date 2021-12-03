import Seat from '@/components/seats/Seat';

import { useEffect, useState } from 'react';

import { getSeatsByHallIdDateAndTimeSlot } from 'endpoints/seats';

const BookingModal = ({ selectedSchedule }) => {
  const [seats, setSeats] = useState([]);
  useEffect(() => {
    (async () => {
      const selectedSeats = await getSeatsByHallIdDateAndTimeSlot(
        selectedSchedule.hall.id,
        selectedSchedule.date,
        selectedSchedule.timeSlot
      );
      setSeats(selectedSeats);
    })();
  }, [
    selectedSchedule.hall.id,
    selectedSchedule.date,
    selectedSchedule.timeSlot,
  ]);
  return seats.map((seat) => <Seat key={seat.id} name={seat.name} />);
};

export default BookingModal;
