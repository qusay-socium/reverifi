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
export const getListingsBySearchKey = async (
  keyWord,
  filter = {
    bedrooms: '',
    fullBathrooms: '',
    listingTypeId: '',
    max: '',
    min: '',
    propertyTypeId: '',
  }
) => {
  const { min, max, propertyTypeId, bedrooms, fullBathrooms, listingTypeId } =
    filter;
  const {
    data: { data },
  } = await http.get(
    `${apiUrl}/listings/search?key=${keyWord}&propertyTypeId=${propertyTypeId}&bedrooms=${bedrooms}&fullBathrooms=${fullBathrooms}&listingTypeId=${listingTypeId}&min=${min}&max=${max}`
  );

  return data;
};

/**
 * get listings by id
 *
 * @param {uuid} listing id.
 *
 * @return {Promise<Object>} listing data response.
 */
export const getListingsById = async (id) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/listings/listing/${id}`);

  return data;
};

/**
 * get user listings
 *
 * @param {String} listing id.
 * @param {Number} limit number of fetched listings
 * @param {Number} limit number of fetched listings
 * @param {Number} page page number
 *
 * @return {Promise<Object>} listing data response.
 */
export const getUserListings = async (id, limit, page = 1, order = 'DESC') => {
  const {
    data: { data, count },
  } = await http.get(
    `${apiUrl}/listings/${id}?limit=${limit}&page=${page}&order=${order}`
  );

  return { count, data };
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

/**
 * Service that get all transactions.
 * @param {object} values transaction update data
 *
 * @return {Object[]} Array of processes.
 */
export const updateTransactionListing = async (values) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/listings/transaction/close`, values);

  return data;
};

/**
 * Service that add or update listing images
 *
 * @param {object} values transaction update data
 *
 * @return {Object[]} Array of processes.
 */
export const addOrUpdateListingImages = async (id, images) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/listings/images/${id}`, images);

  return data;
};

/**
 * Service that add or update listing claim
 *
 * @param {object} values transaction update data
 *
 * @return {Object[]} Array of processes.
 */
export const addOrUpdateListingClaim = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/claim-address`, body);

  return data;
};

/**
 * Service that get listing claim
 *
 * @param {object} values transaction update data
 *
 * @return {Object[]} Array of processes.
 */
export const getListingClaim = async (id) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/claim-address/${id}`);

  return data;
};
