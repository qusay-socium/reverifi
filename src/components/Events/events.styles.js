import styled from 'styled-components';
import colors from 'styles/colors';

export const Title = styled.h3``;

export const EventsSection = styled.div`
  /*   background-color: red;
 */
  display: flex;
  position: relative;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
`;
export const SectionTitle = styled.h1`
  color: ${colors.textBlack};
  font-size: 2rem;
  @media (max-width: 22.5rem) {
    // 360px mobile: '22.5rem',
    font-size: 22px;
  }
`;
