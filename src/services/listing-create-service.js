import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * get all property types.
 * @return {Promise<Object>} Property types response.
 */
export const getAllPropertyTypes = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/property-types?sort=type&order=asc`);

  return data;
};

/**
 * get all listing types.
 * @return {Promise<Object>} Listing types response.
 */
export const getAllListingTypes = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/listing-types?sort=type&order=asc`);

  return data;
};

/**
 * get all listing types.
 * @return {Promise<Object>} Listing types response.
 */
export const getFeatures = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/features`);

  return data;
};

/**
 * Submit listing form.
 *
 * @param {string} formData Contains all form data.
 *
 * @return {Promise<Object>} submitted response.
 */
export const submitListingForm = async (formData) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/listings`, formData);

  return data;
};

/**
 * Update listing form.
 *
 * @param {string} formData Contains all form data.
 *
 * @return {Promise<Object>} submitted response.
 */
export const updateListingForm = async (formData, formId) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/listings/${formId}`, formData);

  return data;
};

/**
 * Get listing form data.
 *
 * @param {string} formID Form ID.
 *
 * @return {Promise<Object>} From data.
 */
export const getListingData = async (formID) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/listings/${formID}`);

  return data;
};
