import {
  SET_USER,
  REMOVE_USER,
  SET_SCHEDULES,
  SET_FILTERED_SCHEDULES,
  SET_SELECTED_SCHEDULE,
  SET_SEATS,
} from '../types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const setSchedules = (schedules) => ({
  type: SET_SCHEDULES,
  payload: schedules,
});

const setSelectedSchedule = (schedule) => ({
  type: SET_SELECTED_SCHEDULE,
  payload: schedule,
});

const setFilteredSchedules = (schedules) => ({
  type: SET_FILTERED_SCHEDULES,
  payload: schedules,
});

const setSeats = (seats) => ({
  type: SET_SEATS,
  payload: seats,
});

export {
  setUser,
  setSchedules,
  removeUser,
  setSelectedSchedule,
  setFilteredSchedules,
  setSeats,
};
