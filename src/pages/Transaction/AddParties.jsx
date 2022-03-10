import AddPartiesWrapper from 'components/transaction/AddPartiesWrapper';
import InviteModal from 'components/transaction/InviteModal';
import ShowModalProvider from 'contexts/ShowModalContext';
import React from 'react';

/**
 * Add Parties component
 *
 * @return {JSX.Element}
 */
function AddParties() {
  return (
    <ShowModalProvider>
      <AddPartiesWrapper />
      <InviteModal />
    </ShowModalProvider>
  );
}

export default AddParties;
