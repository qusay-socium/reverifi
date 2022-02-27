import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * Service that add review
 *
 * @param {Object} body body to send with the request
 *
 * @return {Array} user review
 */
export const addReview = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/reviews`, body);

  return data;
};

/**
 * Service that update review
 *
 * @param {Object} body body to send with the request
 *
 * @return {Array} user review
 */
export const updateReview = async (body) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/reviews`, body);

  return data;
};

/**
 * Service that get reviews by user id
 *
 * @param {String} id  user id
 *
 * @return {Array} user reviews
 */
export const getReviews = async (id) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/reviews/${id}`);

  return data;
};

/**
 * Service that get rating criteria
 *
 * @param {String} type type of criteria (user or listing)
 *
 * @return {Array} rating criteria
 */
export const getRatingCriteria = async (type) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/rating-criteria?type=${type}`);

  return data;
};
