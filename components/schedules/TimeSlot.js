const TimeSlot = ({ schedules, toggleModal }) => {
  return schedules.length > 0 ? (
    schedules.map((schedule) => (
      <div
        className='time-slot__box'
        onClick={() => toggleModal(schedule)}
        key={schedule.id}
      >
        <p className='time-slot__time'>{schedule.timeSlot}</p>
        <p className='time-slot__hall'>{schedule.hall.name}</p>
      </div>
    ))
  ) : (
    <p key='0'>No Playtime available for this day</p>
  );
};
export default TimeSlot;
