import AssignTasksWrapper from 'components/transaction/AssignTasksWrapper';
import InviteModal from 'components/transaction/InviteModal';
import ShowModalProvider from 'contexts/ShowModalContext';
import React from 'react';

function AssignTasks() {
  return (
    <ShowModalProvider>
      <AssignTasksWrapper />
      <InviteModal />
    </ShowModalProvider>
  );
}

export default AssignTasks;
