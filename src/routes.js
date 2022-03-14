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
    adminLayout: true,
    component: lazy(() => import('pages/Transaction/index')),
    label: 'transaction',
    path: '/transaction/:listingId/*',
    title: 'Transaction',
  },
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
    adminLayout: true,
    component: lazy(() => import('pages/Listing/Create')),
    label: 'create-listing',
    path: '/my-listings/create',
    title: 'Create Listing',
  },
  {
    component: lazy(() => import('pages/Listing/Search')),
    label: 'listing-search',
    path: '/listing/search',
    title: 'Search Listing',
  },
  {
    component: lazy(() => import('pages/Listing/ListingPage')),
    label: 'listing',
    path: '/listing/:id',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/Listing/Edit')),
    label: 'create-listing',
    path: '/my-listings/edit/:id',
    title: 'Create Listing',
  },
  {
    component: lazy(() => import('pages/NotFound')),
    label: 'not-found',
    path: '*',
    title: 'Not Found',
  },
  {
    component: lazy(() => import('pages/Listing/ListingPage')),
    label: 'listing-page',
    path: '/listing-page/:id',
    title: 'Listing Page',
  },
  {
    component: lazy(() => import('pages/AgentList')),
    label: 'agent-list',
    path: '/agent-list',
    title: 'Agent List',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/MyRoles')),
    label: 'my-roles',
    path: '/my-roles',
    title: 'My Roles',
  },
  {
    component: lazy(() => import('pages/AgentDetails')),
    label: 'agent-details',
    path: '/agent-details/:id',
    title: 'Agent Details',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/Listing/Edit')),
    label: 'edit-listing-schedule',
    path: '/my-listings/listing-schedule/edit/:id',
    title: 'Edit Listing Schedule',
  },
  {
    component: lazy(() => import('pages/NotFound')),
    label: 'not-found',
    path: '*',
    title: 'Not Found',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/Dashboard')),
    label: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/MyProfile')),
    label: 'my-profile',
    path: '/my-profile',
    title: 'My Profile',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/HowWeWork')),
    label: 'how-we-work',
    path: '/dashboard/how-we-work',
    title: 'How We Work',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/MyListings')),
    label: 'my-listings',
    path: '/my-listings',
    title: 'My listings',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/Transaction')),
    label: 'transaction',
    path: '/transaction/:listingId',
    title: 'Transaction',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/SavedAgentsListings')),
    label: 'saved-agents-listings',
    path: '/saved',
    title: 'Saved Agents Listings',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/TransactionInfo')),
    label: 'transaction-info',
    path: '/transaction',
    title: 'Transaction Info',
  },
  {
    adminLayout: true,
    component: lazy(() => import('pages/Achievements')),
    label: 'achievements',
    path: '/achievements',
    title: 'Achievements Page',
  },
];

export default routes;
