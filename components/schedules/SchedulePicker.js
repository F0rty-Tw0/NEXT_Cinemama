import dayjs from 'dayjs';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDate, setFilteredSchedules } from 'redux/actions';

import Nav from 'react-bootstrap/Nav';
const SchedulePicker = () => {
  const dispatch = useDispatch();
  const { schedules } = useSelector((state) => state.schedules);
  const setMoviesOfDay = useCallback(
    (numberOfDays) => {
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
    <Nav
      justify
      variant='tabs'
      defaultActiveKey='/'
      className='schedule__navigation'
    >
      <Nav.Item>
        <Nav.Link eventKey='/' onClick={() => changeDates(0)}>
          Today ({dayjs().format(`dddd D/M`)})
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='tomorrow' onClick={() => changeDates(1)}>
          Tomorrow ({dayjs().add(1, 'day').format(`dddd D/M`)})
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='after-tomrrow' onClick={() => changeDates(2)}>
          {dayjs().add(2, 'day').format(`dddd D/M`)}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SchedulePicker;
