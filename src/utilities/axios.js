import axios from 'axios';
import { API } from 'config/config';
import { token } from 'config/variables';

/**
 * Post method.
 *
 * @param {Object} values Request body.
 * @param {String} path   Path of route.
 *
 * @returns {Promise<Object>}
 */
export const post = async (values, path) => {
  const res = await axios({
    method: 'Post',
    url: `${API}${path}`,
    data: values,
    headers: {
      Authorization: `token ${token()}`,
    },
  });
  return res.data.data;
};

/**
 * Get method.
 *
 * @param {String} path Path of route.
 *
 * @returns {Promise<Object>}
 */
export const get = async (path) => {
  const res = await axios({
    method: 'Get',
    url: `${API}${path}`,
    headers: {
      Authorization: `token ${token()}`,
    },
  });

  return res.data.data;
};

/**
 * put method.
 *
 * @param {Object} values Request body.
 * @param {String} path   Path of route.
 *
 * @returns {Promise<Object>}
 */
export const patch = async (values, path) => {
  const res = await axios({
    method: 'Patch',
    url: `${API}${path}`,
    data: values,
    headers: {
      Authorization: `token ${token()}`,
    },
  });
  return res.data.data;
};
