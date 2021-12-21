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
    component: lazy(() => import('pages/Login')),
    label: 'login',
    path: '/login',
    title: 'Login',
  },
  {
    component: lazy(() => import('pages/NotFound')),
    label: 'not-found',
    path: '*',
    title: 'Not Found',
  },
  {
    component: lazy(() => import('components/ComingSoon')),
    label: 'Coming Soon',
    path: '/comingsoon',
    title: 'Coming Soon',
  },
];

export default routes;
