import { SET_DATE } from '../types';

import dayjs from 'dayjs';

const dateReducer = (
  state = {
    date: dayjs().format('YYYY-MM-DD'),
  },
  action
) => {
  if (action.type === SET_DATE)
    return {
      ...state,
      date: action.payload,
    };
  return state;
};

export default dateReducer;
