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

/* @param {string} pageNumber the page number to search for .
 *
 * @return {Promise<Object>} listing data response.
 */
export const getAllListingWithRelations = async (pageNumber, limit) => {
  const {
    data: { data, count },
  } = await http.get(`${apiUrl}/listings?page=${pageNumber}&limit=${limit}`);

  return { count, data };
};

/* @param {uuid} listing id.
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
export const getUserListings = async (id, limit, page) => {
  const {
    data: { data },
  } = await http.get(
    `${apiUrl}/listings/${id}?limit=${limit || ''}&page=${page || ''}`
  );

  return data;
};

/* @param {uuid} listing id.
 *
 * @return {Promise<Object>} delete listing .
 */
export const deleteListingById = async (id) => {
  const {
    data: { data },
  } = await http.delete(`${apiUrl}/listings/${id}`);

  return data;
};
