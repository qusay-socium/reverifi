import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * Service that create purchase offer
 *
 * @param {Object} body  to send with the request
 *
 */
export const createPurchaseOffer = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/offer/create`, body);

  return data;
};

/**
 * Service that get reviews by user id
 *
 * @param {String} id  user id
 *
 * @return {Array} user reviews
 */
export const getAllPurchaseOffers = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/offer`);

  return data;
};
