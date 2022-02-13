/* eslint-disable no-unused-expressions */
/* eslint-disable no-else-return */
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
  string?.charAt(0).toUpperCase() + string?.slice(1);

/**
 * format phone number
 *
 * @param {String} phoneNumber to format
 *
 * @return {String} format phone number (000) 000 - 0000
 */
export const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return null;

  const phoneNumberString = phoneNumber.toString();

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
  if (!/^\d+$/g.test(target.value)) {
    target.value = target.value.slice(0, -1);
  }
};

/**
 * Handle text input function prevent enter other types than letters
 *
 * @param {object} target input target object
 *
 */
export const handleTextInput = ({ target }) => {
  if (!/^[a-zA-Z\s]*$/g.test(target.value)) {
    target.value = target.value.slice(0, -1);
  }
};
