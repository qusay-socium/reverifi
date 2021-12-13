import colors from 'styles/colors';
import mq from 'styles/media-query';
import styled from 'styled-components';

export const ReverifiPlusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  margin: 0 auto 0 auto;
  padding: 2.25rem 1.375rem;

  ${mq.tablet`
    flex-direction: row;
    justify-content: center;
  `}
`;

export const PlusUpperSection = styled.div`
  max-width: 34.125rem;
  width: 100%;
`;

export const Header = styled.h3`
  font-size: 1.375rem;
  margin: 0 0 1.125rem 0;

  & span {
    color: ${colors.atlantis};
  }

  ${mq.tablet`
    font-size: 2rem;
  `}
`;

export const Paragraph = styled.p`
  color: ${colors.mineShaft};
  font-size: 1rem;
  margin: 0 0 0.938rem 0;
  opacity: 0.5;

  ${mq.tablet`
    font-size: 1.125rem;
  `}
`;

export const Button = styled.button`
  background: ${colors.atlantis};
  border-radius: 1.25rem;
  border: none;
  color: ${colors.white};
  font-family: montserrat;
  font-size: 1rem;
  font-weight: 600;
  height: 2.5rem;
  width: 7.313rem;

  &:hover {
    cursor: pointer;
  }
`;

export const PlusBottomSection = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  max-width: 34.3125rem;

  ${mq.mobile`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${mq.tablet`
    gap: 1.75rem;
  `}
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  ${mq.tablet`
    max-width: 10.875rem;
  `}
`;

export const ItemIcon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ItemHeader = styled.h4`
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0.634rem 0 0 0;

  ${mq.tablet`
    font-size: 1.125rem;
  `}
`;
