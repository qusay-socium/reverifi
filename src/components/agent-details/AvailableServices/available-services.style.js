import colors from 'styles/colors';
import styled from 'styled-components';

export const BodyContainers = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    height: 1.75rem;
    width: 1.75rem;
  }
`;

export const IconGroup = styled.div`
  align-items: center;
  color: ${colors.dustyGrey};
  display: flex;
  gap: 0.5rem;
`;
