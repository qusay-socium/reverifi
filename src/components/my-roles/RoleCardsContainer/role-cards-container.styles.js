import styled from 'styled-components';
import mq from 'styles/media-query';

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1.375rem;
  width: 100%;

  ${mq.desktop`
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 52.5rem;
  `};

  ${mq.desktopExtraMax`
    max-width: 78.75rem;
  `};
`;
