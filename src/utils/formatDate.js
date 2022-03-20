/* eslint-disable import/prefer-default-export */
/**
 * formatted date to dd/mm/yyyy
 *
 * @param {String} date date (ex: 2022-01-24T12:47:07.098Z)
 *
 * @return {Number} formatted date
 */
export const formatDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};
