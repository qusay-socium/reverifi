const { REACT_APP_API_URL, GOOGLE_MAP_API_KEY } = process.env;

/**
 * The backend API base URL.
 */
export const apiUrl = `${REACT_APP_API_URL}/api`;

/**
 * Google map API key
 */
export const googleMapApiKey = GOOGLE_MAP_API_KEY;

export default {
  apiUrl,
  googleMapApiKey,
};
