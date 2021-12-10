import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import allReducers from 'redux/reducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.user.user?.id)
      // preserve the user state on client side navigation
      nextState.user.user = state.user.user;
    if (state.schedules.schedules.length > 0)
      nextState.schedules.schedules = state.schedules.schedules;
    if (state.filteredSchedules.filteredSchedules.length > 0)
      nextState.filteredSchedules.filteredSchedules =
        state.filteredSchedules.filteredSchedules;
    return nextState;
  } else {
    return allReducers(state, action);
  }
};

const makeStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

const wrapper = createWrapper(makeStore);
export default wrapper;
