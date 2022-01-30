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

/* @param {string} keyWord the word to search for .
 *
 * @return {Promise<Object>} listing data response.
 */
export const getListingsBySearchKey = async (keyWord) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/listings/search?key=${keyWord}`);

  return data;
};
