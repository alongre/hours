export const GET_CURRENT_MONTH = 'components/month/GET_CURRENT_MONTH';
export const GET_MONTH = 'components/month/GET_MONTH';

export const getCurrentMonth = () => ({
  type: GET_CURRENT_MONTH,
});

export const getMonth = (month, year) => ({
  type: GET_MONTH,
  month,
  year,
});