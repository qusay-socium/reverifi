import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const AssignTasksForm = styled.form`
  margin-top: 2.5rem;
`;

export const PartiesInputsContainer = styled.div`
  background-color: ${colors.wildSand};
  padding: 2rem 5rem;
  padding-bottom: 0.5rem;

  ${mq.desktopWide`
    padding: 2rem 20rem;
  `}
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 0.8rem;
  flex-direction: column;

  > div {
    flex: 1;
  }

  ${mq.desktopWide`
    flex-direction: row;
    align-items: flex-end;
  `}
`;

export const SectionContainer = styled.div`
  margin: 2.5rem;

  td {
    padding-right: 5rem;
    padding-bottom: 0;
  }

  th {
    padding-left: 1.2rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const ProcessText = styled.p`
  margin: 0;
  margin-bottom: 0.6rem;
`;
