import Movie from '@/components/movies/Movie';
import BookingModal from 'features/booking/BookingModal';
import { useState } from 'react';

const Movies = ({ movies, seats }) => {
  return (
    <>
      This is All Movies for {day} <br></br>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Movie {...movie} key={movie.id} />
        </div>
      ))}
    </>
  );
};

export default Movies;
