import jwtDecode from 'jwt-decode';

const tokenKey = 'access-token';

/**
 * Decode JWT token.
 *
 * @param {string} token Token to decode.
 *
 * @return {Object} Decoded token object.
 */
const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};

/**
 * Check if JWT token expired.
 *
 * @param {string} token Token to check.
 *
 * @return {boolean} True if token expired otherwise return false.
 */
const isTokensExpired = (token) => {
  const tokenDecoded = decodeToken(token);
  return tokenDecoded && Date.now() >= token.exp * 1000;
};

/**
 * Remove token from local storage.
 */
const removeToken = () => localStorage.removeItem(tokenKey);

/**
 * Get JWT token from local storage.
 *
 * @return {string} Token.
 */
const getToken = () => {
  const token = localStorage.getItem(tokenKey);
  return token || null;
};

/**
 * Get JWT token decoded from local storage.
 *
 * @return {Object} The decoded token.
 */
const getTokenDecoded = () => {
  const token = getToken();
  return token ? decodeToken(token) : null;
};

/**
 * Get JWT token in local storage.
 *
 * @param {string} token Token to set.
 */
const setToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

export default {
  decodeToken,
  getToken,
  getTokenDecoded,
  isTokensExpired,
  removeToken,
  setToken,
};
