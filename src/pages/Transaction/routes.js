import { lazy } from 'react';
import { transactionStepsNames } from 'utils/constants';

/**
 * Objects of routes to determine correct component to load based on URL.
 *
 * @property {JSX.Element} component React component to render.
 * @property {boolean} exact When true, will only match if the path matches the location.pathname exactly.
 * @property {string} label A name used for react `key` prop.
 * @property {string} path Any valid URL path.
 */
const routes = [
  {
    component: lazy(() => import('pages/Transaction/AddParties')),
    label: 'transaction-add-parties',
    path: `/${transactionStepsNames.step1}`,
    title: 'Transaction Add Parties',
  },
  {
    component: lazy(() => import('pages/Transaction/AssignTasks')),
    label: 'transaction-assign-tasks',
    path: `/${transactionStepsNames.step2}`,
    title: 'Transaction Assign Tasks',
  },
];

export default routes;
