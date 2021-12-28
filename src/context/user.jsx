import React, { useContext, useState } from 'react';
import { decodeToken } from 'react-jwt';
import PropTypes from 'prop-types';
import { token } from '../config/variables';

/**
 *
 * Sending state to all children's.
 *
 * @type {React.Context}
 *
 */
export const userContext = React.createContext();
export default function UserContext({ children }) {
  const [user, setUser] = useState();

  /**
   *
   * Decode token.
   *
   * @param token
   *
   * @return {Object} -Id, email,  & email.
   */
  function setUserHandler() {
    if (token()) setUser(decodeToken(token()));
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const store = {
    user,
    setUser: setUserHandler,
  };

  return <userContext.Provider value={store}>{children}</userContext.Provider>;
}

export const useUserContext = () => useContext(userContext);

UserContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
