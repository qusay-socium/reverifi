import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ListingsContainer = styled.div`
  margin: 0rem 1rem;

  ${mq.desktop`
    margin: 0rem 3.44rem;
  `};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    flex: ${({ cardsNum }) => cardsNum > 1 && 1};
  }

  ${mq.desktop`
    flex-direction: row;
  `};
`;

export const Card = styled.div`
  box-shadow: 0rem 0.06rem 0.3rem ${colors.mineShaft}26;
`;
