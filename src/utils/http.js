/**
 * This module used to encapsulate axios methods.
 *
 * All http requests will go throw these methods so that we
 * can customize them and we can add logging, authentication
 * or anything else for requests.
 */
import axios from 'axios';
import tokenUtils from 'utils/token';

axios.interceptors.request.use(
  (config) => {
    const token = tokenUtils.getToken();
    if (!token) {
      return config;
    }
    const requestConfig = { ...config };
    requestConfig.headers.Authorization = `Bearer ${token}`;
    return requestConfig;
  },
  (error) => Promise.reject(error)
);

export default {
  /**
   * Http delete method.
   */
  delete: axios.delete,

  /**
   * Http get method.
   */
  get: axios.get,

  /**
   * Http patch method.
   */
  patch: axios.patch,

  /**
   * Http post method.
   */
  post: axios.post,

  /**
   * Http put method.
   */
  put: axios.put,
};
