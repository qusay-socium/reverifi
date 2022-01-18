import styled from 'styled-components';
import colors from 'styles/colors';

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
  color: ${colors.dustyGray};
  display: flex;
  gap: 0.5rem;
`;
