import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Container = styled.div`
  margin: 0;
  padding: 0.5rem;

  ${mq.desktop`
    background-color: ${colors.alabaster};
    margin: 2.375rem 0;
    padding: 2.25rem 6.5625rem;
  `};
`;

export const Title = styled.h2`
  margin: 0 0 1rem;

  ${mq.desktop`
    margin-bottom: 2rem;
  `};
`;

export const Image = styled.img`
  ${mq.desktop` 
      width: 100%;
  `}
`;
