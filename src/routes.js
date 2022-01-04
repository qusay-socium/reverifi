import { lazy } from 'react';

/**
 * Objects of routes to determine correct component to load based on URL.
 *
 * @property {JSX.Element} component React component to render.
 * @property {boolean}     exact     When true, will only match if the path matches the location.pathname exactly.
 * @property {string}      label     A name used for react `key` prop.
 * @property {string}      path      Any valid URL path.
 * @property {string}      title     Page title.
 */
const routes = [
  {
    component: lazy(() => import('pages/Home')),
    exact: true,
    label: 'home',
    path: '/',
    title: 'Home',
  },
  {
    component: lazy(() => import('pages/Login/Login')),
    label: 'login',
    path: '/login',
    title: 'Login',
  },
  {
    component: lazy(() => import('pages/SignUp/SignUp')),
    label: 'sign-up',
    path: '/sign-up',
    title: 'SignUp',
  },
  {
    component: lazy(() => import('pages/VerifyPhone/VerifyPhone')),
    label: 'verify-phone',
    path: '/verify-phone',
    title: 'Verify Phone',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/TestSideBar')),
    label: 'left-menu-test',
    path: '/left-menu-test',
    title: 'left-menu-test',
  },
  {
    component: lazy(() => import('pages/NotFound')),
    label: 'not-found',
    path: '*',
    title: 'Not Found',
  },
];

export default routes;
