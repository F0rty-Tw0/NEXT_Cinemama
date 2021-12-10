import dayjs from 'dayjs';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setDate, setFilteredSchedules } from 'redux/actions';
import { setSchedulesToStorage } from 'services/schedulesService';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const SchedulePicker = ({ schedules, className = '' }) => {
  const dispatch = useDispatch();
  const setMoviesOfDay = useCallback(
    (numberOfDays) => {
      schedules.length > 0 && setSchedulesToStorage(schedules);
      const todaysSchedule = schedules?.filter(
        (schedule) =>
          schedule.date ===
          dayjs().add(numberOfDays, 'day').format('YYYY-MM-DD')
      );
      dispatch(setFilteredSchedules(todaysSchedule));
    },
    [dispatch, schedules]
  );

  const changeDates = (numberOfDays) => {
    dispatch(setDate(dayjs().add(numberOfDays, 'day').format('YYYY-MM-DD')));
    setMoviesOfDay(numberOfDays);
  };

  useEffect(() => {
    setMoviesOfDay(0);
  }, [setMoviesOfDay]);

  return (
    <Container className='mt-3'>
      <Nav
        justify
        variant='tabs'
        defaultActiveKey='/'
        className={`schedule__navigation ${className}`}
      >
        <Nav.Item>
          <Nav.Link
            className='schedule__day'
            eventKey='/'
            onClick={() => changeDates(0)}
          >
            Today ({dayjs().format(`dddd D/M`)})
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className='schedule__day'
            eventKey='tomorrow'
            onClick={() => changeDates(1)}
          >
            Tomorrow ({dayjs().add(1, 'day').format(`dddd D/M`)})
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className='schedule__day'
            eventKey='after-tomorrow'
            onClick={() => changeDates(2)}
          >
            {dayjs().add(2, 'day').format(`dddd D/M`)}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default SchedulePicker;
