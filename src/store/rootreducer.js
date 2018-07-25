import { combineReducers } from 'redux';

/** individual reducers from each page */
import home from '../pages/Home/data';
import login from '../pages/Login/data';

export default combineReducers({
  home,
  login
});
