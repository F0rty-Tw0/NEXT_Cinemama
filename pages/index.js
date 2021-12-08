import dayjs from 'dayjs';
import wrapper from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import BaseLayout from 'layouts/BaseLayout';
import Schedules from 'components/schedules/Schedules';
import { useEffect, useCallback } from 'react';
import { getSchedulesBetweenDates } from 'endpoints/schedules';
import {
  setDate,
  setError,
  setSchedules,
  setFilteredSchedules,
} from 'redux/actions';
import Nav from 'react-bootstrap/Nav';
const Home = () => {
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

  useEffect(() => {
    setMoviesOfDay(0);
  }, [setMoviesOfDay]);

  const changeDates = (numberOfDays) => {
    dispatch(setDate(dayjs().add(numberOfDays, 'day').format('YYYY-MM-DD')));
    setMoviesOfDay(numberOfDays);
  };

  return (
    <BaseLayout
      title='Welcome to the Cinemama Theaters'
      description='The best place to watch movies'
      className='base-layout__main'
    >
      <Nav justify variant='tabs' className={'schedule__navigation'}>
        <Nav.Item>
          <Nav.Link onClick={() => changeDates(0)}>
            Today ({dayjs().format(`dddd D/M`)})
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active='true'
            variant='contained'
            onClick={() => changeDates(1)}
          >
            Tomorrow ({dayjs().add(1, 'day').format(`dddd D/M`)})
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => changeDates(2)}>
            {dayjs().add(2, 'day').format(`dddd D/M`)}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Schedules />
    </BaseLayout>
  );
};
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const today = dayjs().format('YYYY-MM-DD');
  const dayAfterTomorrow = dayjs().add(2, 'day').format('YYYY-MM-DD');
  try {
    const schedules = await getSchedulesBetweenDates(today, dayAfterTomorrow);
    if (schedules.length > 0) {
      store.dispatch(setSchedules(schedules));
    }
  } catch (err) {
    store.dispatch(setError(err.message));
  }
});

export { getStaticProps };
export default Home;
