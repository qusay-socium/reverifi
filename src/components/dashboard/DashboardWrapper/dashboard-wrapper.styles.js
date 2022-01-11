import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const DashboardContainer = styled.div`
  flex: 1;
  margin: 2rem 3.125rem;
`;

export const DashboardTitle = styled.h1`
  font-weight: 600;
  margin: 0 0 2rem 0;
`;

export const DashboardCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mq.desktop`
    flex-direction: row;
  `}
`;

export const DashboardCard = styled.div`
  align-items: center;
  border-radius: 0.375rem;
  border: 0.0625rem solid ${colors.midGray};
  box-shadow: 0 0.065rem 0.875rem ${colors.midGray};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 2.5rem 3rem;
  text-align: center;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};
  }
`;

export const DashboardCardText = styled.h3`
  font-weight: 600;
  margin: 1.25rem 0 0 0;
  max-width: 13rem;
`;

export const DashboardHeading = styled.h2`
  font-weight: 600;
  margin: 3rem 0 2rem 0;
`;

export const TransactionsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 2rem 0;

  h2 {
    margin: 0;
  }
`;

export const DropdownMenusContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;
