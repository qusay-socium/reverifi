/**
 * get dates difference function
 *
 * @param {*} date date (ex: 2022-01-24T12:47:07.098Z)
 *
 * @return {Number} difference between 2 dates
 */
export const getDatesDifference = (date, period) => {
  const date2 = date.slice(0, 10);
  const today = new Date().toISOString().slice(0, 10);

  const diffInMs = new Date(today) - new Date(date2);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return diffInDays < period;
};

/**
 * generate Label Value Pairs function
 *
 * @param {Array} data array of data
 *
 * @returns {Array} array or reshaped data
 */
export const generateLabelValuePairs = (data) =>
  data?.map((item) => ({ label: item, value: item }));

/**
 * capitalize First Letter function
 *
 * @param {String} string text to be capitalize first letter
 *
 * @return {String} capitalized string
 */
export const toUpperCaseFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

/**
 * format phone number
 *
 * @param {String} phoneNumberString to format
 *
 * @return {String} format phone number
 */
export const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ` ${phoneNumberString}`.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
  if (match) {
    return `(${match[1]})  ${match[2]} - ${match[3]} `;
  }
  return null;
};

/**
 * get Last Characters function
 *
 * @param {String} string text to return last characters of
 * @param {Number} numOfCharacters number of characters to return
 *
 * @return {String} capitalized string
 */
export const getLastCharacters = (string, numOfCharacters = 2) =>
  string?.slice(-numOfCharacters);
