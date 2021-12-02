import Movie from "@/components/movies/Movie";
import BookingModal from "features/booking/BookingModal";
import { useState } from "react";

const Movies = ({ movies, seats }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleBookingModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      This is All Movies <br></br>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Movie {...movie} key={movie.id} />
          <button onClick={toggleBookingModal}>book now</button>
          {isOpen && (
            <BookingModal seats={seats} closeModal={toggleBookingModal}></BookingModal>
          )}
        </div>
      ))}
    </>
  );
};

export default Movies;
