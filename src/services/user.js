import { apiUrl } from 'config/config';
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

/*
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

/*
 * Service that get single user info
 *
 * @return {Object[]} Array of info data.
 */
export const getUserInfo = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/users`);

  return data;
};
