import Schedule from './Schedule';

const Schedules = ({ schedules }) => {
  return (
    <>
      This is All Schedules <br></br>
      {schedules.map((schedule) => (
        <Schedule {...schedule.movie} key={schedule.id} />
      ))}
    </>
  );
};

export default Schedules;
