/* eslint-disable react/destructuring-assignment */
import { useShowModal } from 'contexts/ShowModalContext';
import React from 'react';
import { components } from 'react-select';
import { NoOptionsMessage } from './menu-invite-message.styles';

/**
 * custom menu no options invite message
 *
 * @param {Object} props react select props
 *
 * @return {JSX.Element}
 */
function MenuInviteMessage(props) {
  const { setShowModal } = useShowModal();

  return (
    <components.NoOptionsMessage {...props}>
      <NoOptionsMessage onClick={() => setShowModal(true)}>
        Invite &#62;
      </NoOptionsMessage>
    </components.NoOptionsMessage>
  );
}

export default MenuInviteMessage;
