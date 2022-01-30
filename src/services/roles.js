import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * Service that gets all roles.
 *
 * @return {Object[]} Array of roles.
 */
const getRoles = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/roles?sort=role&order=asc`);

  return data;
};

export default getRoles;
