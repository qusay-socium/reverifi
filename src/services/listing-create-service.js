import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * Submit listing form.
 *
 * @param {string} formData Contains all form data.
 *
 * @return {Promise<Object>} submitted response.
 */
const submitListingForm = async (formData) => {
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
const updateListingForm = async (formData, formId) => {
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
const getListingData = async (formID) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/listings/${formID}`);

  return data;
};

export default {
  getListingData,
  submitListingForm,
  updateListingForm,
};
