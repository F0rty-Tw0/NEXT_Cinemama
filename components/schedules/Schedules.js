import { useSelector } from 'react-redux';
import Schedule from './Schedule';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      <Row
        xs={1}
        md={uniqueMovieIds.length < 2 ? uniqueMovieIds.length : 2}
        xl={uniqueMovieIds.length < 3 ? uniqueMovieIds.length : 3}
      >
        {uniqueMovieIds.length > 0 ? (
          uniqueMovieIds.map((id) => {
            const uniqueSchedule = filteredSchedules?.filter((schedule) => {
              return schedule.movie.id === id;
            });
            return (
              <Col key={id}>
                <Schedule filteredSchedule={uniqueSchedule} />
              </Col>
            );
          })
        ) : (
          <div className='content--center mt-5'>
            <h1>There are no schedules for this day</h1>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Schedules;
