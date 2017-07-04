import { combineReducers } from 'redux';
import clock from '../clock';
import month from '../month';

export default combineReducers({
    clock: clock.reducer,
    month: month.reducer,
});