import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * Service that add invitation
 *
 * @param {Object} body body to send with the request
 */
export const addInvitation = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/invitations `, body);

  return data;
};

/**
 * Service that update Invitation
 *
 * @param {Object} body body to send with the request
 */
export const updateInvitation = async (id, body) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/invitations/${id}`, body);

  return data;
};

/**
 * Service that get user invitations
 *
 * @param {String} id  user id
 *
 * @return {Array} user invitations
 */
export const getInvitations = async (type) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/invitations/${type}`);

  return data;
};
