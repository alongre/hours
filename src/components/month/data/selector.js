const get = state => state.components.month;

export const daysInCurrentMonth = state => get(state).daysInCurrentMonth;
export const daysInMonth = state => get(state).daysInMonth;
