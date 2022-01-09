import styled from 'styled-components';
import mq from 'styles/media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  ${mq.desktop`
    flex: 0 0 50%;
    max-width: 50%;
    padding: 1rem;
  `};
`;

export const CardsContainer = styled.div`
  width: 100%;

  ${mq.desktop`
    display: flex;
    flex-wrap: wrap;
    max-width: 79rem; 
    padding: 0.5rem;
  `};
`;
