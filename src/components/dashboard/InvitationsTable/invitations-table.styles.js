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
  color: ${({ status }) => {
    if (status === invitationStatus.accepted) return colors.green;
    if (status === invitationStatus.declined) return colors.red;
    return colors.mineShaft;
  }};

  font-weight: ${({ status }) =>
    status === invitationStatus.accepted || status === invitationStatus.declined
      ? 600
      : 500};
`;

export const InvitedUserImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
