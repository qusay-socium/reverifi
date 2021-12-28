import { post } from 'utilities/axios';

/**
 * Create new user.
 *
 * @param {Object} values Name, email & password.
 *
 * @return {Promise<Object>}  Id, email, name, phone & isVerified.
 */
export const signup = (values) => {
  const data = post(values, '/api/auth/signup');

  return data;
};

/**
 * Login by email and password.
 *
 * @param {object} values Email & password.
 *
 * @return {Promise<Object>}  Id, email, name, phone, isVerified, user-info & token.
 */
export const login = (values) => {
  const data = post(values, '/api/auth/login');

  return data;
};
