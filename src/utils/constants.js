export const DEFAULT_PAGE_LIMIT = 8;

export const transactionStepsNames = {
  addParties: 'add-parties',
  assignTasks: 'assign-tasks',
  closeDeal: 'close-deal',
  uploadDocuments: 'upload-documents',
};

export const invitationStatus = {
  accepted: 'Accepted',
  declined: 'Declined',
  waiting: 'Waiting',
};

export const searchOptions = {
  componentRestrictions: { country: ['us'] },
};

/**
 * Enum for action types.
 */
export const actionTypes = Object.freeze({
  closeDeal: 'Close deal',
  completeProfile: 'Complete profile',
  completeRegistration: 'Registration',
  createNewListing: 'New listing',
  dailyLogin: 'Login',
});

export default {
  DEFAULT_PAGE_LIMIT,
  actionTypes,
  invitationStatus,
  transactionStepsNames,
};
