/* eslint-disable no-nested-ternary */
import { ReactComponent as AcceptIcon } from 'assets/icons/dashboard-offers-accept.svg';
import { ReactComponent as DeclineIcon } from 'assets/icons/dashboard-offers-decline.svg';
import agentImage from 'assets/listing-agent-image.png';
import Table from 'components/shared/Table';
import {
  IconContainer,
  TableCell,
  TableCellStatus,
  TableRow,
} from 'components/shared/Table/table-styles';
import useEffectOnce from 'hooks/use-effect-once';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getInvitations, updateInvitation } from 'services/invitations';
import { invitationStatus } from 'utils/constants';
import {
  InvitedUserImage,
  InvitedUserImageContainer,
  StatusText,
} from './invitations-table.styles';

/**
 * invitations Table component
 *
 * @param {String} type type of invitations (sent or incoming)
 *
 * @return {JSX.Element}
 */
function InvitationsTable({ type }) {
  const [invitations, setInvitations] = useState([]);

  /**
   * fetch Invitations function
   */
  const fetchInvitations = async () => {
    const data = await getInvitations(type);

    // exclude the transaction creator
    const filteredData = data.filter(
      ({ inviter, invitedUser }) => inviter?.id !== invitedUser?.id
    );
    setInvitations(filteredData);
  };

  const handleInvitationStatus = async (id, status) => {
    await updateInvitation(id, { status });
    fetchInvitations();
  };

  useEffectOnce(() => fetchInvitations());

  return (
    <Table
      headers={[
        'PROPERTY',
        type === 'sent' ? 'INVITED USER' : 'INVITED BY',
        'DATE',
        'INVITED AS',
        type === 'sent' ? 'STATUS' : null,
      ]}
    >
      {invitations?.map(
        ({
          id,
          invitedListing,
          invitedUser,
          role,
          status,
          createdAt,
          inviter,
        }) => (
          <TableRow key={id}>
            <TableCell>{invitedListing?.address}</TableCell>
            <TableCell wordBreak>
              <InvitedUserImageContainer>
                <InvitedUserImage
                  src={
                    (type === 'sent'
                      ? invitedUser?.userInfo?.image
                      : inviter?.userInfo?.image) || agentImage
                  }
                  alt="person"
                />
                <span>
                  {type === 'sent' ? invitedUser?.name : inviter?.name}
                </span>
              </InvitedUserImageContainer>
            </TableCell>
            <TableCell>{new Date(createdAt).toLocaleDateString()}</TableCell>
            <TableCell>{role}</TableCell>
            {type === 'sent' ? (
              <TableCell>
                <StatusText status={status}>
                  {status || invitationStatus?.waiting}
                </StatusText>
              </TableCell>
            ) : status ? (
              <TableCellStatus>
                <StatusText status={status}>{status}</StatusText>
              </TableCellStatus>
            ) : (
              <TableCell iconsCell>
                <IconContainer
                  onClick={() =>
                    handleInvitationStatus(id, invitationStatus?.accepted)
                  }
                >
                  <AcceptIcon />
                </IconContainer>
                <IconContainer
                  onClick={() =>
                    handleInvitationStatus(id, invitationStatus?.declined)
                  }
                >
                  <DeclineIcon />
                </IconContainer>
              </TableCell>
            )}
          </TableRow>
        )
      )}
    </Table>
  );
}

InvitationsTable.propTypes = {
  type: PropTypes.string.isRequired,
};

export default InvitationsTable;
