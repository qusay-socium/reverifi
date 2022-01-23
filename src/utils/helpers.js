/**
 * get dates difference function
 *
 * @param {*} date date (ex: 2022-01-24T12:47:07.098Z)
 * @return {Number} difference between 2 dates
 */
const getDatesDifference = (date, period) => {
  const date2 = date.slice(0, 10);
  const today = new Date().toISOString().slice(0, 10);

  const diffInMs = new Date(today) - new Date(date2);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return diffInDays < period;
};

export default getDatesDifference;
