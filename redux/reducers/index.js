import { combineReducers } from 'redux';
import user from './userReducer';
import seats from './seatsReducer';
import date from './dateReducer';
import error from './errorReducer';
import loading from './loadingReducer';
import schedules from './schedulesReducer';
import selectedSchedule from './selectedScheduleReducer';
import filteredSchedules from './filteredSchedulesReducer';

const allReducers = combineReducers({
  user,
  seats,
  error,
  date,
  loading,
  schedules,
  selectedSchedule,
  filteredSchedules,
});

export default allReducers;
