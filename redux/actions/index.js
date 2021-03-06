import {
  SET_USER,
  SET_DATE,
  SET_SEATS,
  SET_ERROR,
  RESET_ERROR,
  REMOVE_USER,
  SET_LOADING,
  RESET_SEATS,
  SELECT_SEATS,
  RESET_LOADING,
  SET_SCHEDULES,
  SET_BOOKED_SEATS,
  RESET_SELECTED_SEATS,
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

const resetError = () => ({
  type: RESET_ERROR,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const resetLoading = () => ({
  type: RESET_LOADING,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const setBookedSeats = (seats) => ({
  type: SET_BOOKED_SEATS,
  payload: seats,
});

const selectSeats = (seat) => ({
  type: SELECT_SEATS,
  payload: seat,
});

const resetSeats = () => ({
  type: RESET_SEATS,
});

const resetSelectedSeats = () => ({
  type: RESET_SELECTED_SEATS,
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
  resetError,
  removeUser,
  setLoading,
  resetSeats,
  selectSeats,
  resetLoading,
  setSchedules,
  setBookedSeats,
  resetSelectedSeats,
  setSelectedSchedule,
  setFilteredSchedules,
};
