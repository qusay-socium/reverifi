import { apiUrl } from 'config/config';
import http from 'utils/http';

/**
 * Service that get transactions processes.
 *
 * @return {Object[]} Array of processes.
 */
export const getTransactionsProcesses = async (id) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/transactions/processes/${id}`);

  return data;
};

/**
 * Service that gets transaction workflow step
 *
 * @return {Object} workflow step
 */
export const getWorkflowStep = async (number) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/transactions/workflow-step/${number}`);

  return data;
};

/**
 * Service that add or update transaction
 *
 * @return {Object[]} Array of roles.
 */
export const addOrUpdateTransaction = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/transactions`, body);

  return data;
};

/**
 * Service that add or update transaction
 *
 * @return {Object[]} Array of roles.
 */
export const addTransactionAssignees = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/transactions/add-parties`, body);

  return data;
};

/**
 * Service that set the transactions processes status.
 *
 * @return {Object} object for the process.
 */
export const updateProcessesStatus = async (values) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/transactions/processes`, values);

  return data;
};

/**
 * Service that add transaction note
 *
 * @return {Object[]} Array of roles.
 */
export const addTransactionNote = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/transactions/notes`, body);

  return data;
};

/**
 * Service that gets transaction processes
 *
 */
export const getProcesses = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/processes`);

  return data;
};

/**
 * Service that gets transaction Assignees
 *
 */
export const getAssignees = async (id) => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/transactions/assignees/${id}`);

  return data;
};

/**
 * Service that get all transactions.
 *
 * @return {Object[]} Array of processes.
 */
export const getTransactions = async () => {
  const {
    data: { data },
  } = await http.get(`${apiUrl}/transactions/assignees`);

  return data;
};

/**
 * Service that add transaction processes
 *
 */
export const addProcesses = async (body) => {
  const {
    data: { data },
  } = await http.post(`${apiUrl}/transactions/processes`, body);

  return data;
};

/**
 * Service that gets transaction note
 *
 */
export const getNotes = async (id, stepId) => {
  const {
    data: { data },
  } = await http.get(
    `${apiUrl}/transactions/notes/${id}?workflowStepId=${stepId}`
  );

  return data;
};

/**
 * Service that get all transactions.
 *
 * @return {Object[]} Array of processes.
 */
export const updateTransaction = async (values) => {
  const {
    data: { data },
  } = await http.patch(`${apiUrl}/transactions/`, values);

  return data;
};
