/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import colors from 'styles/colors';
import { invitationStatus } from 'utils/constants';

export const InvitedUserImage = styled.img`
  border-radius: 50%;
  display: inline;
  height: 2.8125rem;
  margin-right: 0.8rem;
  vertical-align: middle;
  width: 2.8125rem;
`;

export const StatusText = styled.span`
  color: ${({ status }) =>
    status === invitationStatus.accepted
      ? colors.green
      : status === invitationStatus.declined
      ? colors.red
      : colors.mineShaft};

  font-weight: ${({ status }) =>
    status === invitationStatus.accepted || status === invitationStatus.declined
      ? 600
      : 500};
`;
