export const DEFAULT_PAGE_LIMIT = 8;

export const transactionStepsNames = {
  addParties: { name: 'Add Involved Parties', route: 'add-parties' },
  assignTasks: { name: 'Manage & Assign Tasks', route: 'assign-tasks' },
  closeDeal: { name: 'Finalize and Close Deal', route: 'close-deal' },
  uploadDocuments: { name: 'Upload Documents', route: 'upload-documents' },
};

export const invitationStatus = {
  accepted: 'Accepted',
  declined: 'Declined',
  waiting: 'Waiting',
};

export const searchOptions = {
  componentRestrictions: { country: ['us'] },
};

export const transactionStatus = {
  canceled: 'canceled',
  closed: 'closed',
  inProgress: 'in progress',
};

export const transactionRoles = {
  buyer: 'Buyer',
  buyerAgent: 'Buyer Agent',
  buyerAttorney: 'Buyer Attorney',
  coordinator: 'Coordinator',
  homeInsurance: 'Home Insurance',
  lender: 'Lender',
  seller: 'Seller',
  sellerAgent: 'Seller Agent',
  sellerAttorney: 'Seller Attorney',
  titleInsurance: 'Title Insurance',
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
