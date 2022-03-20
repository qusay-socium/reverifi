import { apiUrl } from 'config/config';
import { toUpperCaseFirstLetter } from 'utils/helpers';
import http from 'utils/http';

/**
 * Service that update user roles
 *
 * @param {Array(String)} rolesIds roles ids array
 *
 * @return {Object[]} Array of roles.
 */
export const updateUserRoles = async (rolesIds) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/users/roles`, { roles: rolesIds });

  return data;
};

/**
 * Service that update user info
 *
 * @param {Object} body data to be send as request body
 *
 * @return {Object[]} Array of info data.
 */
export const updateUserInfo = async (body) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/users`, body);

  return data;
};

/**
 * Service that get agent users
 *
 * @param {String} type agent type
 * @param {String} location agent location
 * @param {String} name agent name
 * @param {number} [page=0]
 *
 * @return {Object[]} Array of agents.
 */
export const getUsersByType = async (type, location, name, page = 0) => {
  const userType = type ? toUpperCaseFirstLetter(type) : 'Agent';

  const {
    data: { data },
  } = await http.get(
    `${apiUrl}/users/agents/${userType}?page=${page}&location=${location}&name=${name}`
  );

  return data;
};

/**
 * Service that get users with limit
 *
 * @param {Number} limit number of users
 * @param {String} name agent name
 *
 * @return {Object[]} Array of users.
 */
export const getUsersWithLimit = async (limit, name) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/users/all/${limit}?name=${name}`);

  return data;
};

/**
 * Service that get user roles
 *
 * @return {Object[]} Array of roles.
 */
export const getUserRoles = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/users/roles`);

  return data;
};

/**
 * Service that get single user info
 *
 * @return {Object[]} Array of info data.
 */
export const getUserInfo = async (id) => {
  const path = id ? `/${id}` : '';

  const {
    data: { data },
  } = await http.get(`${apiUrl}/users${path}`);

  return data;
};

/**
 * Service that add invited user
 *
 * @return {Object} invited user
 */
export const addInvitedUser = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/users/invited`, body);

  return data;
};

/**
 * Service that add invited user
 *
 * @return {Object} invited user
 */
export const updatePhoneNumber = async (body) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/users/phone`, body);

  return data;
};
