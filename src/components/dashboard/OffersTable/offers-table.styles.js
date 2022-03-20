import { ReactComponent as counterIco } from 'assets/icons/dashboard-offers-counter.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const OfferList = styled.ul`
  margin-top: 1rem;
  padding: 0;
`;

export const OfferListItem = styled.li`
  background-color: ${colors.alabaster};
  border-bottom: 0.06rem solid ${colors.midGray};
  display: flex;
  padding: 0.2rem 1.2rem;
  align-items: center;
`;

export const OfferListItemText = styled.p`
  min-width: 20rem;
`;

export const EmailText = styled.a`
  margin: 0 0.5rem;
`;

export const IconsContainer = styled.td`
  display: none;

  ${mq.tabletWide`
    display: flex;
    position: absolute;
    right: 2rem;
    top: 0.8rem;
  `}
`;

export const CounterOfferIcon = styled(counterIco)`
  &:hover {
    + span {
      display: block;
    }
  }
`;
