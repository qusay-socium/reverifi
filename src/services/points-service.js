import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * get all user action types.
 *
 * @param {string} userId User id.
 *
 * @return {Promise<Object>} Property types response.
 */
export const getUserActionTypes = async (userId) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/user-action-types/${userId}`);

  return data;
};

/**
 * get action type by id.
 *
 * @param {string} id Action type id.
 *
 * @return {Promise<Object>} Property types response.
 */
export const getActionTypeById = async (id) => {
  const { data } = await http.get(`${apiUrl}/action-types/${id}`);

  return data;
};

/**
 * Add user action type.
 *
 * @return {Promise<Object>} submitted response.
 */
export const addUserActionType = async (actionTypeData) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/user-action-types`, actionTypeData);

  return data;
};
