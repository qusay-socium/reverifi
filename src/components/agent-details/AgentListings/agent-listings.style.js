import colors from 'styles/colors';
import mq from 'styles/media-query';
import styled from 'styled-components';

export const ListingsContainer = styled.div`
  margin: 0rem 1rem;

  ${mq.desktop`
    margin: 0rem 3.4375rem;
  `};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mq.desktop`
    flex-direction:row;
  `};
`;

export const Card = styled.div`
  box-shadow: 0rem 0.0625rem 0.375rem ${colors.mineShaft}26;
`;
