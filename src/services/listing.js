import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * @param {string} keyWord the word to search for .
 *
 * @return {Promise<Object>} listing data response.
 */
const getListingSearch = async (keyWord) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/listings/search?key=${keyWord}`);

  return data;
};

export default getListingSearch;
