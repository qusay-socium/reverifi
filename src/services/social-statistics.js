import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 *  save user or listing
 *
 * @param {Object} body body to send with request
 *
 * @return {Object} data user or listing save
 */
export const saveUserOrListing = async (body) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/social-statistics`, body);

  return data;
};

/**
 *  get user or listing save
 *
 * @param {String} userId user id
 * @param {String} listingId listing id
 *
 * @return {Object} data user or listing save
 */
export const getUserOrListingSave = async (userId, listingId) => {
  const {
    data: { data },
  } = await http.get(
    `${apiUrl}/social-statistics?userId=${userId}&listingId=${listingId}`
  );

  return data;
};

/**
 *  view or share user or listing
 *
 * @param {Object} body body to send with request
 *
 * @return {Object} data user statistics
 */
export const viewOrShareUserOrListing = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/social-statistics`, body);

  return data;
};
