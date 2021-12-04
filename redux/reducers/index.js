import { combineReducers } from 'redux';
import userReducer from './userReducer';
import seatsReducer from './seatsReducer';
import schedulesReducer from './schedulesReducer';
import selectedScheduleReducer from './selectedScheduleReducer';

const allReducers = combineReducers({
  userReducer,
  seatsReducer,
  schedulesReducer,
  selectedScheduleReducer,
});

export default allReducers;
