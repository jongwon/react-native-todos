import {combineReducers} from 'redux';

import todos from './TodoStore';

const reducers = combineReducers({
  todos,
});

export * from './TodoStore';
export * from 'react-redux';

export default reducers;
