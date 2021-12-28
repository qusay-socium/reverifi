import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * Login user.
 *
 * @param {string} email User email.
 * @param {string} password User password.
 *
 * @return {Promise<Object>} The login response.
 */
const login = async (email, password) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/auth/login`, { email, password });

  return data;
};

/**
 * Sign up new user.
 *
 * @param {string} name User name.
 * @param {string} email User email.
 * @param {string} password User password.
 *
 * @return {Promise<Object>} The sign up response
 */
const signUp = async (name, email, password) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/auth/signup`, {
    email,
    name,
    password,
  });

  return data;
};

export default {
  login,
  signUp,
};
