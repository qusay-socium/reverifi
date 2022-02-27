/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-else-return */

/**
 * get dates difference function
 *
 * @param {String} date date (ex: 2022-01-24T12:47:07.098Z)
 * @param {Number} period period to compare if the dates difference exceed it
 *
 * @return {Number} difference between 2 dates
 */
export const getDatesDifference = (date, period) => {
  const cleanedDate = date?.slice(0, 10);
  const today = new Date().toISOString().slice(0, 10);

  const diffInMs = new Date(today) - new Date(cleanedDate);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (period) {
    return diffInDays < period;
  }

  return diffInDays || 1;
};

/**
 * get dates difference function
 *
 * @param {date} firstDate date (ex: 2022-01-24T12:47:07.098Z)
 * @param {date} secondDate date (ex: 2022-01-24T12:47:07.098Z)
 * @param {Number} period the period to calculate the difference
 *
 * @return {Number} will return the difference between the two dates
 */
export const getDifferenceBetweenTwoDates = (firstDate, secondDate, period) => {
  const cleanedFirstDate = new Date(firstDate)?.toLocaleDateString();
  const cleanedSecondDate = new Date(secondDate)?.toLocaleDateString();

  const diffInMs = new Date(cleanedSecondDate) - new Date(cleanedFirstDate);
  const diffInDays = Math.abs(Math.ceil(diffInMs / (1000 * 60 * 60 * 24) + 1));

  if (period) {
    return diffInDays < period;
  }

  return diffInDays || 1;
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
  string?.charAt(0).toUpperCase() + string?.slice(1);

/**
 * split camel case string
 *
 * @param {String} string text with camel case
 *
 * @return {String} normal text after split
 */
export const splitCamelCaseString = (string) =>
  toUpperCaseFirstLetter(string?.replace(/([a-z])([A-Z])/g, '$1 $2'));

/**
 * format phone number
 *
 * @param {String} phoneNumber to format
 *
 * @return {String} format phone number (000) 000 - 0000
 */
export const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return null;

  const phoneNumberString = phoneNumber?.toString().slice(2);

  if (phoneNumberString.length < 3) return null;

  let reg;
  let lastPartLength;

  if (phoneNumberString?.length > 6) {
    lastPartLength = phoneNumberString?.length - 6;
    reg = `^(\\d{3})(\\d{3})(\\d{${lastPartLength}})$`;
  } else {
    lastPartLength = phoneNumberString?.length - 3;
    reg = `^(\\d{3})(\\d{${lastPartLength}})$`;
  }

  const regex = new RegExp(reg);
  const cleaned = ` ${phoneNumberString}`.replace(/\D/g, '');
  const match = cleaned.match(regex);

  const countryCode = match[1];
  const areaCode = match[2];
  const lineNumber = match[3];

  if (match && phoneNumberString?.length > 6) {
    return `(${countryCode}) ${areaCode} - ${lineNumber}`;
  } else if (match && phoneNumberString?.length <= 6) {
    return areaCode ? `(${countryCode}) - ${areaCode}` : `(${countryCode})`;
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

/**
 * Handle number input function prevent enter other types than numbers
 *
 * @param {object} target input target object
 *
 */
export const handleNumberInput = ({ target }) => {
  target.value = target.value.replace(
    // eslint-disable-next-line no-useless-escape
    /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|a-zA-Z]/g,
    ''
  );
};

/**
 * Handle text input function prevent enter other types than letters
 *
 * @param {object} target input target object
 *
 */
export const handleTextInput = ({ target }) => {
  target.value = target.value.replace(
    // eslint-disable-next-line no-useless-escape
    /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|0-9]/g,
    ''
  );
};

/**
 * separateBy function that return an array as a separated string
 *
 * @param {Array} data array of data you want to separate
 * @param {String} separator separator between data array (ex: ',' '/')
 *
 * @return {String} separated string
 */
export const separateBy = (data, separator = ' ') =>
  data?.map((item, i, array) =>
    i + 1 !== array.length ? `${item}${separator} ` : `${item}`
  );
