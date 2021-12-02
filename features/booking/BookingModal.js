import Seat from "@/components/seats/Seat";

const BookingModal = ({ closeModal, seats }) => {
  console.log(seats);

  return (
    <div>
      <div>All seats</div>
      {seats.map((seat) => (
        <Seat key={seat.id} name={seat.name}></Seat>
      ))}
    </div>
  );
};

export default BookingModal;
