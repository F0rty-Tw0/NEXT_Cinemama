import { useDispatch, useSelector } from 'react-redux';
import { selectSeats } from 'redux/actions';

const Seat = ({ seat }) => {
  const dispatch = useDispatch();
  const { bookedSeats } = useSelector((state) => state.bookedSeats);
  const { selectedSeats } = useSelector((state) => state.selectSeats);

  return (
    <div
      className={`${selectedSeats.includes(seat) ? 'selected' : ''}${
        bookedSeats.includes(seat) ? 'booked' : ''
      }`}
      onClick={
        bookedSeats.includes(seat) ? null : () => dispatch(selectSeats(seat))
      }
    >
      {seat.name}
    </div>
  );
};

export default Seat;
