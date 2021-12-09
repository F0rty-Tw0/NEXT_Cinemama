import Image from 'next/image';
import { useEffect, useCallback } from 'react';
import {
  setSeats,
  setLoading,
  resetLoading,
  setBookedSeats,
  resetSelectedSeats,
  setError,
} from 'redux/actions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import makeBooking from './makeBooking';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAvailableSeatsByHallIdDateAndTimeSlot,
  getBookedSeatsByHallIdDateAndTimeSlot,
} from 'endpoints/seats';
import Seat from '@/components/seats/Seat';

const BookingModal = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const { schedule } = useSelector((state) => state.selectedSchedule);
  const { selectedSeats } = useSelector((state) => state.selectSeats);
  const { user } = useSelector((state) => state.user);
  const { seats } = useSelector((state) => state.seats);

  const getSeats = useCallback(async () => {
    try {
      const available = await getAvailableSeatsByHallIdDateAndTimeSlot(
        schedule.hall.id,
        schedule.date,
        schedule.timeSlot
      );
      const booked = await getBookedSeatsByHallIdDateAndTimeSlot(
        schedule.hall.id,
        schedule.date,
        schedule.timeSlot
      );
      dispatch(setBookedSeats(booked));

      const allSeats = available.concat(booked);
      const sortedSeats = allSeats.sort((a, b) => a.id - b.id);
      dispatch(setSeats(sortedSeats));
      dispatch(resetLoading());
    } catch (err) {
      dispatch(setError('Could not get available seats'));
      dispatch(resetLoading());
    }
  }, [dispatch, schedule]);

  useEffect(() => {
    (async () => {
      dispatch(setLoading());
      getSeats();
    })();
  }, [getSeats, dispatch]);

  const onBooking = async () => {
    dispatch(setLoading());
    await makeBooking(selectedSeats, schedule?.id, user?.id);
    dispatch(resetSelectedSeats());
    getSeats();
  };
  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      size='m'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Book your seats
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          width={'500'}
          height={'150'}
          alt={'Schedule Image'}
          src={'/screen.svg'}
        />
        <Container className='seats__container'>
          {seats.map((seat) => (
            <Seat key={seat.id} seat={seat} />
          ))}
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button className="custom__button" onClick={() => onBooking()}>Book</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;
