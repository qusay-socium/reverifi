import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * get Featured Listings
 *
 * @return {Promise<Object>} The featured listings response.
 */
export const getFeaturedListings = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/listings/featured`);
  return data;
};

/**
 * get Listings By Search Key
 *
 * @param {string} keyWord the word to search for .
 *
 * @return {Promise<Object>} listing data response.
 */
export const getListingsBySearchKey = async (keyWord) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/listings/search?key=${keyWord}`);

  return data;
};

/**
 * get Listings By Id
 *
 * @param {uuid} listing id.
 *
 * @return {Promise<Object>} listing data response.
 */
export const getListingsById = async (id) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/listings/${id}`);

  return data;
};

/**
 * get user listings
 *
 * @param {String} listing id.
 * @param {Number} limit number of fetched listings
 *
 * @return {Promise<Object>} listing data response.
 */
export const getUserListings = async (id, limit) => {
  const numOfListings = limit ? `?limit=${limit}` : '';

  const {
    data: { data },
  } = await http.get(`${apiUrl}/listings/user-listings/${id}${numOfListings}`);

  return data;
};
