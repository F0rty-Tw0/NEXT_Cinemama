import { fetchWithApiToken } from '../services/fetchApi';

const getAllSeats = async() => {
    return fetchWithApiToken(`seats`, true);
}

const getSeatsByHallId = async (id) => {
    return fetchWithApiToken(`seats/hall/${id}`, true);
  }

export { getSeatsByHallId, getAllSeats }