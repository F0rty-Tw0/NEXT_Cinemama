import Link from 'next/link';
import { useState } from 'react';
import Typography from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSchedule, setError } from 'redux/actions';
import BookingModal from 'features/booking/BookingModal';
import Image from 'next/image';
import { Time } from 'styled-components/Time';
import { Hours } from 'styled-components/Hours';
import { MovieCard } from 'styled-components/MovieCard';

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
    <>
      <MovieCard>
        <div>
          {/* <Image
            src={`https://www.themoviedb.org/t/p/original/${filteredSchedule[0].movie.poster}`}
            alt='movie image'
          /> */}
          <Link
            href={`/movies/${filteredSchedule[0].movie.id}`}
            as={`/movies/${filteredSchedule[0].movie.id}`}
          >
            {filteredSchedule[0].movie.title}
          </Link>
          {openModal && <BookingModal></BookingModal>}
          {filteredSchedule[0].movie.genres.map((genre) => (
            <Typography key={genre.id}>{genre.name} </Typography>
          ))}
          <Hours>
            {filteredSchedule.map((schedulePlaying) => (
              <Time
                onClick={() => toggleModal(schedulePlaying)}
                key={schedulePlaying.id}
              >
                {/* <p>{schedulePlaying.timeSlot}</p>
                <p> {schedulePlaying.hall.name}</p> */}
              </Time>
            ))}
          </Hours>
        </div>
      </MovieCard>
    </>
  );
};

export default Schedule;
