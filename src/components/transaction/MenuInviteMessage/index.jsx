/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useShowModal } from 'contexts/ShowModalContext';
import React from 'react';
import { components } from 'react-select';
import { NoOptionsMessage } from './menu-invite-message.styles';

function MenuInviteMessage(props) {
  const { setShowModal } = useShowModal();

  return (
    <components.NoOptionsMessage {...props}>
      <NoOptionsMessage onClick={() => setShowModal(true)}>
        Invite
      </NoOptionsMessage>
    </components.NoOptionsMessage>
  );
}

export default MenuInviteMessage;
