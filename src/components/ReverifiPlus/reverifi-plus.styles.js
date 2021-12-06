import styled from 'styled-components';
import mq from 'styles/media-query';
import colors from 'styles/colors';

export const ReverifiPlusDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  margin: 0 1.125rem 0 1.125rem;

  ${mq.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Title = styled.h3``;

export const PlusUpperSection = styled.div`
  max-width: 34.125rem;
  width: 100%;

  ${mq.tablet`
    margin: auto 0 auto 6.25rem;
  `}
`;

export const Header = styled.h3`
  font-family: Montserrat;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.676rem;
  line-height: 1.688erm;
  margin: 0 0 1.125rem 0;

  & span {
    color: ${colors.atlantis};
    font-weight: 600;
  }

  ${mq.tablet`
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4375rem;
  `}
`;

export const Paragraph = styled.p`
  color: ${colors.mineShaft};
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.2188rem;
  margin: 0 0 0.938rem 0;
  opacity: 0.5;

  ${mq.tablet`
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: normal;
    line-height: 1.375rem;
  `}
`;

export const Button = styled.button`
  background: ${colors.atlantis};
  border-radius: 1.25rem;
  border: none;
  color: ${colors.white};
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  height: 2.5rem;
  line-height: 1.219rem;
  line-height: 1.25rem;
  width: 7.313rem;

  &:hover {
    cursor: pointer;
  }
`;

export const PlusBottomSection = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);

  ${mq.tablet`
    gap: 1.75rem;
    margin: auto 6.25rem auto 0;
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
  font-family: Montserrat;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.0625rem;
  margin: 0.634rem 0 0 0;

  ${mq.tablet`
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
  `}
`;
