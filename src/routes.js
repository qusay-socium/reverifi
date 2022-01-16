import { lazy } from 'react';

/**
 * Objects of routes to determine correct component to load based on URL.
 *
 * @property {boolean} adminLayout Wrap the page with admin layout.
 * @property {JSX.Element} component React component to render.
 * @property {bool} disableFooter Whether footer disabled.
 * @property {bool} disableNavBar Whether navbar disabled.
 * @property {boolean} exact When true, will only match if the path matches the location.pathname exactly.
 * @property {string} label A name used for react `key` prop.
 * @property {string} path Any valid URL path.
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
    disableFooter: true,
    disableNavbar: true,
    label: 'login',
    path: '/login',
    title: 'Login',
  },
  {
    component: lazy(() => import('pages/SignUp/SignUp')),
    disableFooter: true,
    disableNavbar: true,
    label: 'sign-up',
    path: '/sign-up',
    title: 'SignUp',
  },
  {
    component: lazy(() => import('pages/VerifyPhone')),
    disableFooter: true,
    label: 'verify-phone',
    path: '/verify-phone',
    title: 'Verify Phone',
  },
  {
    // this is only for testing purposes
    adminLayout: true,
    component: lazy(() => import('pages/TestSideBar')),
    label: 'test-side-bar',
    path: '/test-side-bar',
    title: 'Test Sidebar',
  },
  {
    component: lazy(() => import('pages/Listings/CreateListing')),
    label: 'create-listing',
    path: '/listings/create',
    title: 'Create Listing',
  },
  {
    component: lazy(() => import('pages/Listings/ListingPage')),
    label: 'listing-page',
    path: '/listing-page',
    title: 'Listing Page',
  },
  {
    component: lazy(() => import('pages/AgentList')),
    label: 'agent-list',
    path: '/agent-list',
    title: 'Agent List',
  },
  {
    component: lazy(() => import('pages/MyRoles')),
    label: 'my-roles',
    path: '/my-roles',
    title: 'My Roles',
  },
  {
    component: lazy(() => import('pages/AgentDetails')),
    label: 'agent-details',
    path: '/agent-details',
    title: 'Agent Details',
  },
  {
    component: lazy(() => import('pages/NotFound')),
    label: 'not-found',
    path: '*',
    title: 'Not Found',
  },
];

export default routes;
