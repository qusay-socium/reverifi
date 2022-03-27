import styled from 'styled-components';
import colors from 'styles/colors';

export const HeaderText = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 1.8rem;
`;

export const AssigneesContainer = styled.div`
  background-color: ${colors.alabaster};
  padding: 1.8rem 3rem;
  min-width: 40rem;
`;

export const SubHeaderText = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  margin-bottom: 2rem;
`;

export const AssigneesInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > div {
    flex: 20%;
  }
`;

export const AssigneeInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;

  > p {
    font-weight: 400;
    font-size: 15px;
    margin: 0;
    margin-bottom: 0.6rem;
  }

  > span {
    font-weight: 400;
    font-size: 15px;
    color: ${colors.osloGray};
    text-transform: capitalize;
  }
`;

export const ProcessesContainer = styled.div`
  margin: 1.8rem 2.8rem;
  max-width: 60rem;
`;

export const ProcessStatusText = styled.span`
  font-weight: 600;
  font-size: 0.85rem;
  color: ${({ isCompleted }) => (isCompleted ? colors.green : colors.osloGray)};

  ${({ overDue }) =>
    overDue &&
    `
    color: ${colors.red}
  `}
`;

export const StatusIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
