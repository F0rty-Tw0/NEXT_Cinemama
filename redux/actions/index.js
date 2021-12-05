import {
  SET_USER,
  SET_DATE,
  SET_SEATS,
  SET_ERROR,
  REMOVE_USER,
  SET_SCHEDULES,
  SET_FILTERED_SCHEDULES,
  SET_SELECTED_SCHEDULE,
} from '../types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
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
  setDate,
  setSeats,
  setError,
  removeUser,
  setSchedules,
  setSelectedSchedule,
  setFilteredSchedules,
};
