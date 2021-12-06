import { useDispatch } from 'react-redux';
import { selectSeats } from 'redux/actions';

const Seat = ({ seat }) => {
  const dispatch = useDispatch();
  return <div onClick={() => dispatch(selectSeats(seat))}>Seat {seat.name}</div>;
};

export default Seat;
