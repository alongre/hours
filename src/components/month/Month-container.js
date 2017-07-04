import { connect } from 'react-redux';
import { Month } from './Month';
import * as selector from './data/selector';
import * as actions from './data/actions';

export const MonthContainer = connect(state => ({
  daysInCurrentMonth: selector.daysInCurrentMonth(state),
}), {
  showDaysInMonth: actions.getMonth,
  showDaysInCurrentMonth: actions.getCurrentMonth,
})(Month);