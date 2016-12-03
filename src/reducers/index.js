import { combineReducers } from 'redux';
import testReducer from './test-reducer';
import ClickReducer from './click-reducer';
import DBReducer from './db-reducer';

module.exports = combineReducers({
  testReducer : testReducer,
  clickReducer : ClickReducer,
  DBReducer : DBReducer
});
