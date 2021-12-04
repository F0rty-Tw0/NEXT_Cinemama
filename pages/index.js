import dayjs from 'dayjs';
import wrapper from 'redux/store';
import { useSelector } from 'react-redux';
import BaseLayout from 'layouts/BaseLayout';
import Schedules from 'components/schedules/Schedules';
import { useState } from 'react';
import { getSchedulesBetweenDates } from 'endpoints/schedules';
import { setSchedules } from 'redux/actions';

const Home = () => {
  const { schedules } = useSelector((state) => state.schedulesReducer);
  const [day, setDay] = useState(dayjs().format('YYYY-MM-DD'));
  const [filteredSchedule, setFilteredSchedule] = useState(
    schedules.filter(
      (schedule) => schedule.date === dayjs().format('YYYY-MM-DD')
    )
  );

  const changeDates = (numberOfDays) => {
    setFilteredSchedule(
      schedules.filter(
        (schedule) =>
          schedule.date ===
          dayjs().add(numberOfDays, 'day').format('YYYY-MM-DD')
      )
    );

    setDay(dayjs().add(numberOfDays, 'day').format('YYYY-MM-DD'));
  };

  return (
    <BaseLayout
      title='Welcome to the Cinemama Theaters'
      description='The best place to watch movies'
      className='base-layout__main'
    >
      <button onClick={() => changeDates(0)}>today</button>
      <button onClick={() => changeDates(1)}>tomorrow</button>
      <button onClick={() => changeDates(2)}>after tomorrow</button>
      <Schedules schedules={filteredSchedule} todayDate={day} />
    </BaseLayout>
  );
};
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
const getStaticProps = wrapper.getServerSideProps((store) => async () => {
  const today = dayjs().format('YYYY-MM-DD');
  const dayAfterTomorrow = dayjs().add(2, 'day').format('YYYY-MM-DD');
  const schedules = await getSchedulesBetweenDates(today, dayAfterTomorrow);
  store.dispatch(setSchedules(schedules));
});



export { getStaticProps };
export default Home;
