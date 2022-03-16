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
