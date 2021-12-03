import { combineReducers } from 'redux';
import setUserReducer from './setUserReducer';

const allReducers = combineReducers({ setUserReducer });

export default allReducers;
