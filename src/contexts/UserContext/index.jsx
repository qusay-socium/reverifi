import useEffectOnce from 'hooks/use-effect-once';
import PropTypes from 'prop-types';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import auth from 'services/auth';
import tokenUtil from 'utils/token';

export const UserContext = createContext({
  /**
   * Is user logged in.
   *
   * @type {string}
   */
  isLoggedIn: false,

  /**
   * Login the user.
   *
   * @type {Function}
   */
  login: undefined,

  /**
   * Logout the user.
   *
   * @type {Function}
   */
  logout: undefined,

  /**
   * Sign up the user.
   *
   * @type {Function}
   */
  signUp: undefined,

  /**
   * User data.
   *
   * @type {Object}
   */
  userInfo: undefined,
});

UserContext.displayName = 'UserContext';

/**
 * User context provider to manage user auth operations.
 *
 * @param {Object}      props
 * @param {JSX.Element} props.children Child nodes to render and pass context.
 *
 * @return {JSX.Element}
 */
export function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userInfo, setUserInfo] = useState();

  /**
   * Logout user.
   */
  const logout = useCallback(() => {
    tokenUtil.removeToken();
    setIsLoggedIn(false);
    setUserInfo(undefined);
  }, []);

  /**
   * Update the state based on user token.
   *
   * @param {string} token User token.
   */
  const setTokenData = useCallback(
    (token) => {
      const { email, name, phone } = tokenUtil.decodeToken(token) || {};
      // if token not decoded correctly consider the token is invalid and logout the user
      if (!(email && name)) {
        logout();
        return;
      }
      tokenUtil.setToken(token);
      setUserInfo({ email, name, phone });
      setIsLoggedIn(true);
    },
    [logout]
  );

  /**
   * Login user.
   *
   * @param {string} email User email.
   * @param {string} password User password.
   */
  const login = useCallback(
    async (email, password) => {
      const { token } = await auth.login(email, password);
      setTokenData(token);
    },
    [setTokenData]
  );

  /**
   * Sign up new user.
   *
   * @param {string} name User name.
   * @param {string} email User email.
   * @param {string} password User password.
   * @param {string} phone User phone number.
   *
   */
  const signUp = useCallback(
    async (name, email, password, phone) => {
      const { token } = await auth.signUp(name, email, password, phone);
      setTokenData(token);
    },
    [setTokenData]
  );

  useEffectOnce(() => {
    const token = tokenUtil.getToken();
    if (!token) {
      return;
    }
    setTokenData(token);
  });

  const value = useMemo(
    () => ({ isLoggedIn, login, logout, setUserInfo, signUp, userInfo }),
    [isLoggedIn, userInfo, login, logout, signUp]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

UserProvider.defaultProps = {
  children: null,
};

export const useUser = () => useContext(UserContext);
