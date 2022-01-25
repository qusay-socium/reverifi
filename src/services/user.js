import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * Service that update user roles
 *
 * @param {Array(String)} rolesIds roles ids array
 * @return {Object[]} Array of roles.
 */
export const updateUserRoles = async (rolesIds) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/users/roles`, { roles: rolesIds });

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
