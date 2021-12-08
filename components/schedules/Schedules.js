import { useSelector } from 'react-redux';
import Schedule from './Schedule';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Schedules = () => {
  const { filteredSchedules } = useSelector((state) => state.filteredSchedules);

  const getUniqueMovieIds = (selectedSchedules) => {
    const movieIds = selectedSchedules.map((schedule) => schedule.movie.id);
    return [...new Set(movieIds)];
  };

  const uniqueMovieIds = getUniqueMovieIds(filteredSchedules);
  return (
    <Container>
      <Row xs={1} md={2} className='g-4'>
        {uniqueMovieIds.map((id) => {
          const uniqueSchedule = filteredSchedules?.filter((schedule) => {
            return schedule.movie.id === id;
          });
          return <Schedule filteredSchedule={uniqueSchedule} key={id} />;
        })}
      </Row>
    </Container>
  );
};

export default Schedules;
