import { lazy } from 'react';
import { transactionStepsNames } from 'utils/constants';

/**
 * Objects of routes to determine correct component to load based on URL.
 *
 * @property {JSX.Element} component React component to render.
 * @property {string} label A name used for react `key` prop.
 * @property {string} path Any valid URL path.
 * @property {string} title route title
 */
const routes = [
  {
    component: lazy(() => import('pages/Transaction/AddParties')),
    label: 'transaction-add-parties',
    path: `/${transactionStepsNames.addParties}`,
    title: 'Transaction Add Parties',
  },
  {
    component: lazy(() => import('pages/Transaction/AssignTasks')),
    label: 'transaction-assign-tasks',
    path: `/${transactionStepsNames.assignTasks}`,
    title: 'Transaction Assign Tasks',
  },
  {
    component: lazy(() => import('pages/Transaction/UploadDocuments')),
    label: 'transaction-upload-documents',
    path: `/${transactionStepsNames.uploadDocuments}`,
    title: 'Transaction Upload Documents',
  },
];

export default routes;
