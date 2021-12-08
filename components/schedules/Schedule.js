import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSchedule, setError } from 'redux/actions';
import Card from 'react-bootstrap/Card';
import BookingModal from 'features/booking/BookingModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
    <Container style={{ width: '23.2459677419%' }} className='schedule__card'>
      <Container className='schedule__cardRating'>
        <p>Rating: {filteredSchedule[0].movie.rating}</p>
      </Container>
      <Container style={{ padding: '0', overflow: 'hidden' }}>
        <img
          className='schedule__cardImage'
          variant='top'
          src={`https://www.themoviedb.org/t/p/w200/${filteredSchedule[0].movie.poster}`}
        />
      </Container>
      <Container>
        <Row style={{ height: '4rem' }}>
          <Container>
            <Link
              passHref
              href={`/movies/${filteredSchedule[0].movie.id}`}
              as={`/movies/${filteredSchedule[0].movie.id}`}
            >
              <a>{filteredSchedule[0].movie.title}</a>
            </Link>
          </Container>
        </Row>
        <Row style={{ height: '8rem', fontWeight: 'bold' }}>
          {openModal && <BookingModal></BookingModal>}
          {filteredSchedule[0].movie.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </Row>
        <Row>
          <Container className='schedule__cardContainer'>
            {filteredSchedule.map((schedulePlaying) => (
              <Card.Text
                className='schedule__cardText'
                onClick={() => toggleModal(schedulePlaying)}
                key={schedulePlaying.id}
              >
                {schedulePlaying.timeSlot}
                <br></br>
                {schedulePlaying.hall.name}
              </Card.Text>
            ))}
          </Container>
        </Row>
      </Container>
    </Container>
  );
};

export default Schedule;
