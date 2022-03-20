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
import { getUserInfo } from 'services/user';
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
    async (token) => {
      const { email, id, name, phone, points, createdAt } =
        tokenUtil.decodeToken(token) || {};

      // if token not decoded correctly consider the token is invalid and logout the user
      if (!(email && name)) {
        logout();
        return;
      }

      tokenUtil.setToken(token);
      setIsLoggedIn(true);

      try {
        const { user, image } = await getUserInfo();
        setUserInfo({
          createdAt: user?.createdAt,
          email: user?.email,
          id: user?.id,
          image,
          name: user?.name,
          phone: user?.phone,
          points: user?.points,
        });
      } catch (err) {
        setUserInfo({ createdAt, email, id, name, phone, points });
      }
    },
    [logout]
  );

  /**
   * Login or sign up Google user.
   *
   * @param {string} idToken Google user id token retrived from `react-social-login`.
   */
  const googleLogin = useCallback(
    async (idToken) => {
      const { token } = await auth.googleLogin(idToken);
      setTokenData(token);
    },
    [setTokenData]
  );

  /**
   * Login or sign up Facebook user.
   *
   * @param {string} accessToken Facebook user access token retrived from `react-social-login`.
   */
  const facebookLogin = useCallback(
    async (accessToken) => {
      const { token } = await auth.facebookLogin(accessToken);
      setTokenData(token);
    },
    [setTokenData]
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
    () => ({
      facebookLogin,
      googleLogin,
      isLoggedIn,
      login,
      logout,
      setUserInfo,
      signUp,
      userInfo,
    }),
    [isLoggedIn, userInfo, login, logout, signUp, googleLogin, facebookLogin]
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
