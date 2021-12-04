import { combineReducers } from 'redux';
import userReducer from './userReducer';
import seatsReducer from './seatsReducer';
import schedulesReducer from './schedulesReducer';
import selectedScheduleReducer from './selectedScheduleReducer';
import filteredSchedulesReducer from './filteredSchedulesReducer';

const allReducers = combineReducers({
  userReducer,
  seatsReducer,
  schedulesReducer,
  selectedScheduleReducer,
  filteredSchedulesReducer,
});

export default allReducers;
