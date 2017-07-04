import { combineReducers } from 'redux';
import moment from 'moment'
import * as actions from './actions';
import * as datesHelper from '../../../common/helpers/dates';

export const daysInCurrentMonth = (state = [] , action) => {
  switch (action.type) {
    case actions.GET_CURRENT_MONTH:
      return datesHelper.getDaysInCurrentMonth();
    default:
      return state;
  }
};

export const daysInMonth = (state = [] , action) => {
  switch (action.type) {
    case actions.GET_MONTH:
      return datesHelper.getDaysInMonth(action.month, action.year);
    default:
      return state;
  }
};

export default combineReducers({
  daysInCurrentMonth,
  daysInMonth,
});