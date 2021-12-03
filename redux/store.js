import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import allReducers from 'redux/reducers';

// create a makeStore function
const makeStore = (context) => createStore(allReducers);

// export an assembled wrapper
const wrapper = createWrapper(makeStore, { debug: true });
export default wrapper;
