import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ListingsContainer = styled.div`
  margin: 0rem 1rem;

  > h2 {
    font-weight: 600;
    font-size: 2rem;
  }

  ${mq.desktop`
    margin: 0rem 3.44rem;
  `};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.1rem;
  gap: 1rem;

  > div {
    ${({ cardsNum }) =>
      cardsNum > 1 &&
      `
        flex: 1;
    `}
  }

  ${mq.desktop`
    flex-direction: row;
  `};
`;

export const Card = styled.div`
  box-shadow: 0rem 0.06rem 0.3rem ${colors.mineShaft}26;
`;
